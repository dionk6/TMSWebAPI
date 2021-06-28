import './Login.css';
import {useForm} from "react-hook-form";
import { useHistory  } from 'react-router-dom'
import TMSLogo from "../src/User/Images/TMSLogo.png";
import {signIn} from "../src/http/http-requests";
import {NavLink} from "react-router-dom"

const Login = () =>{
    const { register , handleSubmit } = useForm();
    const routerHistory = useHistory();
    
    const onSubmitAccount = async (data) =>{
        try{
            var result = await signIn(data);
            if(result.data.isCorrect){
                window.localStorage.setItem("UserId",result.data.userId);
                window.localStorage.setItem("RoleId",result.data.roleId);
                console.log(result.data.message);
                if(result.data.roleId === "2"){
                    routerHistory.push('/');
                }else if(result.data.roleId === "1"){
                    routerHistory.push('/Admin');
                }
            }else{
                console.log(result.data.message);
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
                    <h4 className="text-center">Login to your Account</h4>
                    <div className="col-lg-12">
                        <form onSubmit={handleSubmit(onSubmitAccount)}>
                            <div className="form-group">
                                <input type="text" placeholder="Email" name="email" className="form-control" ref={register({required: true})} />
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="Password" name="password" className="form-control" ref={register({required: true})} />
                            </div>
                            <div className="row m-0 mt-3">
                                <div className="form-group col-lg-6 col-sm-6 col-12 d-flex justify-content-center mt-2">
                                    <button type="submit">Login</button>
                                </div>
                                <div className="form-group col-lg-6 col-sm-6 col-12 d-flex justify-content-center text-center mt-2">
                                    <NavLink to="/SignUp">Sign Up</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;