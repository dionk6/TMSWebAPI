import './SignUp.css';
import {useForm} from "react-hook-form";
import TMSLogo from "../src/User/Images/TMSLogo.png";
import {createAccount} from "../src/http/http-requests";
import {NavLink} from "react-router-dom"

const SignUp = () =>{

    const { register , handleSubmit } = useForm();
    
    const onSubmitAccount = async (data) =>{
        if(data.password != data.confirmPassword){
            alert("Password not matching");
            return;
        }
        try{
            var result = await createAccount(data);
            if(result){
                window.location.href = "/Login";
            }else{
                alert("Failed to Sign Up");
            }
        }catch(err){
            console.log(err);
        }finally{

        }
    }
    return(
        <div className="Login row m-0 justify-content-center">
            <div className="col-sm-12 box text-white d-flex flex-column">
                <div className="d-flex flex-column justify-content-end align-items-center mt-5">
                    <img src={TMSLogo} alt="Logo" className="logo"/>
                </div>
                <div className="loginBox col-lg-12 bg-white p-5 text-dark">
                    <h4 className="text-center">Sign Up</h4>
                    <div className="col-lg-12">
                        <form onSubmit={handleSubmit(onSubmitAccount)}>
                            <div className="form-group">
                                <input type="text" placeholder="Email" name="email" className="form-control" ref={register({required: true})} />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password" className="form-control" ref={register({required: true})} />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Confirm Password" name="confirmPassword" className="form-control" ref={register({required: true})} />
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