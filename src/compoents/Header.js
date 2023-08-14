import logo from "../Assests/logo.png"
function Header() {
    return (
        <>
            <div className="container-fluid pt-2">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center justify-content-evenly ">
                        <div className="logoX">
                            <img src={logo} alt="" />
                        </div>
                        <div className="logoSideNav">
                            <nav>
                                <ul>
                                    <li><a href="/">ADU</a></li>
                                    <li><a href="/">Backyard Offices</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="btnSideNav d-flex align-items-center ">
                            <nav>
                                <ul>
                                    <li><a href="/">Our Solution</a></li>
                                    <li><a href="/">Company</a></li>
                                    <li><a className="login" href="/">Company Login</a></li>
                                </ul>
                            </nav>
                         
                            <button>Reserve Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
