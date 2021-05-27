import './Header.css';

const Header = (props) =>{

    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logoHeader col-md-4">
                        <img src="" />
                    </div>
                    <nav className="headersLinks col-md-8">
                        <ul>
                            <li className="navItem">
                                <a>Home</a>
                            </li>
                            <li className="navItem">
                                <a>Leagues</a>
                            </li>
                            <li className="navItem">
                                <a>About</a>
                            </li>
                            <li className="navItem">
                                <a>Contact</a>
                            </li>    
                        </ul>    
                    </nav>
                </div>
            </div>
        </header>
    );

}

export default Header;