import './ContactContent.css' 

const ContactContent = () => {
    return (
        <div className="contactContent container-fluid row m-0 mb-5 justify-content-center">
            <div className="col-12 text-center mt-5 mb-5">
                <h1>GET <span>IN</span> <span>TOUCH</span></h1>
            </div>
            <div className="col-lg-10 text-center">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam reprehenderit, blanditiis nam debitis libero facilis illum repudiandae eveniet voluptatibus quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat ,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quisquam reprehenderit, blanditiis nam debitis libero facilis illum repudiandae eveniet voluptatibus quibusdam illo ea nisi ipsa accusantium nobis animi asperiores quaerat .
                </p>
            </div>
            <div className="col-lg-8 row" style={{marginTop: "100px",marginBottom: "100px"}}>
                <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                    <span className="roundBox mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            enableBackground="new 0 0 512 512"
                            viewBox="0 0 384 384"
                            >
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#b81e20"
                                d="M353.188 252.052c-23.51 0-46.594-3.677-68.469-10.906-10.719-3.656-23.896-.302-30.438 6.417l-43.177 32.594c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208 11.167-20.198 7.635-31.448-7.26-21.99-10.948-45.063-10.948-68.583C132.146 13.823 118.323 0 101.333 0h-70.52C13.823 0 0 13.823 0 30.813 0 225.563 158.438 384 353.188 384c16.99 0 30.813-13.823 30.813-30.813v-70.323c-.001-16.989-13.824-30.812-30.813-30.812z"
                                data-original="#000000"
                            ></path>
                        </svg>
                    </span>
                    <p>
                        +1 800-256-9876
                    </p>
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                    <span className="roundBox mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            enableBackground="new 0 0 512 512"
                            viewBox="0 0 512 512"
                            >
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#b81e20"
                                d="M467 76H45C20.137 76 0 96.262 0 121v270c0 24.885 20.285 45 45 45h422c24.655 0 45-20.03 45-45V121c0-24.694-20.057-45-45-45zm-6.302 30L287.82 277.967c-8.5 8.5-19.8 13.18-31.82 13.18s-23.32-4.681-31.848-13.208L51.302 106h409.396zM30 384.894V127.125L159.638 256.08 30 384.894zM51.321 406l129.587-128.763 22.059 21.943c14.166 14.166 33 21.967 53.033 21.967s38.867-7.801 53.005-21.939l22.087-21.971L460.679 406H51.321zM482 384.894L352.362 256.08 482 127.125v257.769z"
                                data-original="#000000"
                            ></path>
                        </svg>
                    </span>
                    <p>
                        info@soccerclub.com
                    </p>
                </div>
                <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
                    <span className="roundBox mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            enableBackground="new 0 0 512 512"
                            viewBox="0 0 512 512"
                            >
                            <path
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#b81e20"
                                d="M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.49 81.104L246.667 506.5c1.875 3.396 5.448 5.5 9.333 5.5s7.458-2.104 9.333-5.5l140.896-254.813c13.375-24.76 20.438-52.771 20.438-81.021C426.667 76.563 350.104 0 256 0zm0 256c-47.052 0-85.333-38.281-85.333-85.333S208.948 85.334 256 85.334s85.333 38.281 85.333 85.333S303.052 256 256 256z"
                                data-original="#000000"
                            ></path>
                        </svg>
                    </span>
                    <p>
                        Agim Ramadani, Aktash
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactContent;