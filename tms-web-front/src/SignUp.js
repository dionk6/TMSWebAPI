import './SignUp.css';
import TMSLogo from "../src/User/Images/TMSLogo.png";
import {NavLink} from "react-router-dom"

const SignUp = () =>{
    return(
        <div className="Login row m-0 justify-content-center">
            <div className="col-sm-12 box text-white d-flex flex-column">
                <div className="d-flex flex-column justify-content-end align-items-center mt-5">
                    <img src={TMSLogo} alt="Logo" className="logo"/>
                </div>
                <div className="loginBox col-lg-12 bg-white p-5 text-dark">
                    <h4 className="text-center">Sign Up</h4>
                    <div className="col-lg-12">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="row m-0 mt-3">
                                <div className="form-group col-lg-6 col-sm-6 col-12 d-flex justify-content-center mt-2">
                                    <button type="submit">Sign up</button>
                                </div>
                                <div className="form-group col-lg-6 col-sm-6 col-12 d-flex justify-content-center text-center mt-2">
                                    <NavLink to="/Login">Back to Login</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;