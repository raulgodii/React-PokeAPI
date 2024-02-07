

function Header() {


    return (
        <>
            {/* <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot"></span>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div> */}

            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                <a href="index.html" className="logo">
                                    <img src="./src/assets/images/logo.png" alt="" style={{ width: '158px' }} />
                                </a>

                                <ul className="nav">
                                    <li><a href="index.html" className="active">Home</a></li>
                                    <li><a href="shop.html">Our Shop</a></li>
                                    <li><a href="product-details.html">Product Details</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="#">Sign In</a></li>
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
                                <h6>Welcome to lugx</h6>
                                <h2>BEST GAMING SITE EVER!</h2>
                                <p>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
                                <div className="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                                        <button role="button">Search Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="right-image">
                                <img src="./src/assets/images/banner-image.jpg" alt="" />
                                <span className="price">$22</span>
                                <span className="offer">-40%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
