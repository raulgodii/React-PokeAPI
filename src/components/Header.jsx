

function Header() {


    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">

                                <a href="index.html" className="logo">
                                    <img src="assets/images/logo.png" alt="" style="width: 158px;"/>
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
        </>
    )
}

export default Header
