import './ContactForm.css'

const ContactContent = () => {
    return (
        <div className="contactForm row m-0 mb-5 justify-content-center">
            <div className="col-lg-11 col-10 row m-0 justify-content-center" style={{background: "black"}}>
                <div className="col-12 text-center" style={{marginTop: "50px",marginBottom: "50px"}}>
                    <h1>CONTACT U<span>S <span>BY FO</span></span><span>RM</span></h1>
                </div>
                <div className="col-lg-10 text-secondary text-center" style={{fontSize: "14px",marginBottom: "80px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam reprehenderit, blanditiis nam debitis libero facilis illum repudiandae eveniet voluptatibus quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat ,Lorem ipsum dolor sit amet .
                </div>
                <form className="row mt-0 mr-0 ml-0 justify-content-center" style={{marginBottom: "100px"}}>
                    <div className="col-lg-10 row justify-content-center">
                        <div className="col-lg-6">
                            <input type="text" className="inputsDesign form-control" placeholder="First Name" />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="inputsDesign form-control mt-lg-0 mt-4" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="col-lg-10 row justify-content-center mt-4">
                        <div className="col-lg-6">
                            <input type="text" className="inputsDesign form-control" placeholder="Subject" />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="inputsDesign form-control mt-lg-0 mt-4" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-lg-10 row justify-content-center mt-4">
                        <div className="col-12">
                            <textarea className="inputsDesign form-control" placeholder="Message"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactContent