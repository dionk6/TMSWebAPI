import {useEffect,useState} from 'react';
import {useForm} from "react-hook-form";
import {sendEmail} from '../../../http/http-requests';
import {PostContactHttpRequest} from '../../../httpNode/http-requests';

import './ContactForm.css'

const ContactContent = () => {
    const [contact, setContact] = useState({});

    const { register , handleSubmit } = useForm();
    
    const onSubmitContact = async (data) =>{
        console.log(data)
        try{
            let result = await sendEmail(data);
            let resultNode = await PostContactHttpRequest(data);
            console.log(resultNode)
            if(result.data && resultNode){
                contactMessage("Thank you for your message","green");
                clearData();
            }else{
                contactMessage("Email not valid","red");
            }
        }catch(err){
            console.log(err);
        }finally{
        }
    }

    function clearData(){
        var inputs = document.getElementsByTagName("input");
        for(var i=0;i<inputs.length;i++){
            inputs[i].value = "";
        }
        document.getElementsByName("message")[0].value = "";
    }

    function contactMessage(str,style){
        var element = document.getElementById("msg");
        element.innerText = str;
        element.style.color = style;
        setTimeout(function(){ 
            element.innerText ="" 
        }, 3000);
    }

    useEffect(()=>{
        setContact({});
    },[]);

    return (
        <div className="contactForm row m-0 mb-5 justify-content-center">
            <div className="col-lg-11 col-10 row m-0 justify-content-center" style={{background: "black"}}>
                <div className="col-12 text-center" style={{marginTop: "50px",marginBottom: "50px"}}>
                    <h1>CONTACT U<span>S <span>BY FO</span></span><span>RM</span></h1>
                </div>
                <div className="col-lg-10 text-secondary text-center" style={{fontSize: "14px",marginBottom: "80px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam reprehenderit, blanditiis nam debitis libero facilis illum repudiandae eveniet voluptatibus quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat ,Lorem ipsum dolor sit amet .
                </div>
                <h2 className="text-center mb-5" id="msg"></h2>
                <form onSubmit={handleSubmit(onSubmitContact)} className="row mt-0 mr-0 ml-0 justify-content-center" style={{marginBottom: "100px"}}>
                    <div className="col-lg-10 row justify-content-center">
                        <div className="col-lg-6">
                            <input type="text" className="inputsDesign form-control" placeholder="First Name" name="firstName" ref={register({required: true})}  />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="inputsDesign form-control mt-lg-0 mt-4" placeholder="Last Name" name="lastName" ref={register({required: true})} />
                        </div>
                    </div>
                    <div className="col-lg-10 row justify-content-center mt-4">
                        <div className="col-lg-6">
                            <input type="text" className="inputsDesign form-control" placeholder="Subject" name="subject" ref={register({required: true})} />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="inputsDesign form-control mt-lg-0 mt-4" placeholder="Email" name="email" ref={register({required: true})} />
                        </div>
                    </div>
                    <div className="col-lg-10 row justify-content-center mt-4">
                        <div className="col-12">
                            <textarea className="inputsDesign form-control" placeholder="Message" name="message" ref={register({required: true})}></textarea>
                        </div>
                    </div>
                    <div className="col-lg-10 row justify-content-center mt-4">
                        <div className="col-12">
                            <button type="submit" className="btn btn-danger">Send</button>  
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactContent