import { Link } from "react-router-dom"

function Header() {


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

                                <ul className="nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/pokemons">Pokemons</Link></li>
                                    <li><Link to=""><a>Sign In</a></Link></li>
                                </ul>
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
