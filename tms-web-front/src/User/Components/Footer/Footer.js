import './Footer.css';

const Footer = (props) =>{

    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footerLogo col-md-4 col-sm-12">
                        <h1>Footer</h1>
                    </div>
                    <div className="footerLinks col-md-4 col-sm-12">
                        <ul>    
                            <li>L</li>
                            <li>A</li>
                            <li>L</li>
                        </ul>
                    </div>
                    <div className=" col-md-4 col-sm-12">
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer