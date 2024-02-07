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
                                    <li><Link to="">Home</Link></li>
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

            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="caption header-text">
                                <h6>Welcome to poke api</h6>
                                <h2>The Ultimate Pokémon Experience!</h2>
                                <p>Explore the captivating world of Pokemon with our comprehensive online platform.</p>
                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Search Pokemons" id='searchText' name="searchKeyword" onkeypress="handle" />
                                        <button role="button">Search Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="right-image">
                                <img src="./src/assets/images/banner-image.jpg" alt="" />
                                <span className="price">POKE API</span>
                                <span className="offer">+13K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
