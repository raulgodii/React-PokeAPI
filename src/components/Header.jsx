import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
    let [nav, setNav] = useState(<ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pokemons">Pokemons</Link></li>
        <li><Link to="/login">Sign In</Link></li>
    </ul>)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setNav(<ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pokemons">Pokemons</Link></li>
                    <li><Link onClick={logout}>Log Out</Link></li>
                </ul>)
                // ...
            } else {
                setNav(<ul className="nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pokemons">Pokemons</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                </ul>)
                // ...
            }
        });
    }, []);



    function logout() {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/login");
        }).catch((error) => {
            // An error happened.
            console.log("error: " + error);
        });
    }


    return (
        <>

            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                <a className="logo">
                                    <img src="./src/assets/images/logo.png" alt="" style={{ width: '158px' }} />
                                </a>

                                {nav}

                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>

                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
