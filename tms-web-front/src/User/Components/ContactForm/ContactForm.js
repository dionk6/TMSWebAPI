import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../../http/http-requests";
import { PostContactHttpRequest } from "../../../httpNode/http-requests";

import "./ContactForm.css";

const ContactContent = () => {
  const [contact, setContact] = useState({});
  const [errorAppear,setErrorAppear] = useState(false);
  const [succesAppear,setSuccesAppear] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmitContact = async (data) => {
    try {
      let result = await sendEmail(data);
      let resultNode = await PostContactHttpRequest(data);
      if (result.data && resultNode) {
        setSuccesAppear(true);
        // contactMessage("Thank you for your message", "green");
        reset();
        clearData();
      } else {
        // contactMessage("Email not valid", "red");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setSuccesAppear(false);
      }, 3000);
    }
  };

  function clearData() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    document.getElementsByName("message")[0].value = "";
  }

  // function contactMessage(str, style) {
  //   var element = document.getElementById("msg");
  //   element.innerText = str;
  //   element.style.color = style;
  //   setTimeout(function () {
  //     element.innerText = "";
  //   }, 3000);
  // }

  useEffect(() => {
    setContact({});
  }, []);

  let errorNameRequired;
  let noSpaceName;
  let nameHasNumbers;
  let errorLastNameRequired;
  let noSpaceLastName;
  let lastNameHasNumbers;
  let errorSubjectRequired;
  let errorSubjectInvalid;
  let errorEmailRequired;
  let errorEmailInvalid;
  let errorEmailEmpty;
  let errorMessageRequired;
  let errorMessageInvalid;

  if (errors.firstName?.type === "required") {
    errorNameRequired = <span className="error-msg">Please enter Name</span>;
  }
  if (errors.firstName?.type == "validate") {
    noSpaceName = <span className="error-msg">No empty spaces</span>;
  }
  if (errors.firstName?.type === "pattern") {
    nameHasNumbers = <span className="error-msg">Name is not valid</span>;
  }
  if (errors.lastName?.type === "required") {
    errorLastNameRequired = (
      <span className="error-msg">Please enter Last Name</span>
    );
  }
  if (errors.lastName?.type === "validate") {
    noSpaceLastName = <span className="error-msg">No empty spaces</span>;
  }
  if (errors.lastName?.type === "pattern") {
    lastNameHasNumbers = (
      <span className="error-msg">Last Name is not valid</span>
    );
  }
  if (errors.subject?.type === "required") {
    errorSubjectRequired = (
      <span className="error-msg">Subject is required</span>
    );
  }
  if (errors.subject?.type === "validate") {
    errorSubjectInvalid = <span className="error-msg">No empty spaces</span>;
  }
  if (errors.email?.type === "required") {
    errorEmailRequired = <span className="error-msg">E-Mail is required</span>;
  }
  if (errors.email?.type === "validate") {
    errorEmailEmpty = (
      <span className="error-msg">No empty spaces</span>
    );
  }
  if (errors.email?.type === "pattern") {
    errorEmailInvalid = (
      <span className="error-msg">E-Mail Format is not valid</span>
    );
  }
  if (errors.email?.type === "validate") {
    errorEmailEmpty = (
      <span className="error-msg">No empty spaces</span>
    );
  }
  if (errors.message?.type === "required") {
    errorMessageRequired = (
      <span className="error-msg">Please add message</span>
    );
  }
  if (errors.message?.type === "validate") {
    errorMessageInvalid = (
      <span className="error-msg">No empty spaces</span>
    );
  }
  const trapSpacesForRequiredFields = (value) => !!value.trim();

  return (
    <div className={`contactForm ${succesAppear ? "active" : errorAppear ? "error" : ""} row m-0 mb-5 justify-content-center`}>
      <div
        className="col-lg-11 col-10 row m-0 justify-content-center"
        style={{ background: "black" }}
      >
        <div
          className="col-12 text-center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <h1>
            CONTACT U
            <span>
              S <span>BY FO</span>
            </span>
            <span>RM</span>
          </h1>
        </div>
        <div
          className="col-lg-10 text-secondary text-center"
          style={{ fontSize: "14px", marginBottom: "80px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          quisquam reprehenderit, blanditiis nam debitis libero facilis illum
          repudiandae eveniet voluptatibus quibusdam illo ea nisi ipsa
          accusantium nobis animi asperiores quaerat ,Lorem ipsum dolor sit amet
          .
        </div>
        <div className="responseMessages">
          <h2 className="thankYouAppear text-center mb-5" id="msg">Thank You for Your message !</h2>
          <h2 className="errorrAppear text-center mb-5" id="msg">Your message was not sent !</h2>

        </div>
        <form
          onSubmit={handleSubmit(onSubmitContact)}
          className="row mt-0 mr-0 ml-0 justify-content-center"
          style={{ marginBottom: "100px" }}
        >
          <div className="col-lg-10 row justify-content-center">
            <div className="col-lg-6">
              <input
                type="text"
                className="inputsDesign form-control"
                placeholder="First Name"
                name="firstName"
                ref={register({
                  required: true,
                  pattern:
                  /^[A-Za-zäöüẞßÄÖÜ]((?:\s?[A-Za-zäöüẞßÄÖÜ]+)*(?:[-])*)*$/,
                  validate: trapSpacesForRequiredFields
                })}
              />
              {errorNameRequired}
              {nameHasNumbers}
              {noSpaceName}
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="inputsDesign form-control mt-lg-0 mt-4"
                placeholder="Last Name"
                name="lastName"
                ref={register({
                  required: true,
                  pattern:
                  /^[A-Za-zäöüẞßÄÖÜ]((?:\s?[A-Za-zäöüẞßÄÖÜ]+)*(?:[-])*)*$/,
                  validate: trapSpacesForRequiredFields
                })}
              />
              {errorLastNameRequired}
              {lastNameHasNumbers}
              {noSpaceLastName}
            </div>
          </div>
          <div className="col-lg-10 row justify-content-center mt-4">
            <div className="col-lg-6">
              <input
                type="text"
                className="inputsDesign form-control"
                placeholder="Subject"
                name="subject"
                ref={register({
                  required: true,
                  validate: trapSpacesForRequiredFields,
                })}
              />
              {errorSubjectRequired}
              {errorSubjectInvalid}
            </div>
            <div className="col-lg-6">
              <input
                type="text"
                className="inputsDesign form-control mt-lg-0 mt-4"
                placeholder="Email"
                name="email"
                ref={register({
                  required: true,
                  pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  validate: trapSpacesForRequiredFields
                })}
              />
              {errorEmailRequired}
              {errorEmailEmpty}
              {errorEmailInvalid}
            </div>
          </div>
          <div className="col-lg-10 row justify-content-center mt-4">
            <div className="col-12">
              <textarea
                className="inputsDesign form-control"
                placeholder="Message"
                name="message"
                ref={register({ required: true ,validate: trapSpacesForRequiredFields })}
              ></textarea>
              {errorMessageRequired}
              {errorMessageInvalid}
            </div>
          </div>
          <div className="col-lg-10 row justify-content-center mt-4">
            <div className="col-12">
              <button type="submit" className="btn btn-danger">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;
