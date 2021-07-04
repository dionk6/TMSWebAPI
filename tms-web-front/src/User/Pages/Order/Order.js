import { useEffect, useState } from "react";
import "./Order.css";
import { useForm } from "react-hook-form";
import ProductBanner from "../../Components/ProductBanner/ProductBanner";
import { GetPlayer } from "../../../http/http-requests";
import { PostOrderHttpRequest } from "../../../httpNode/http-requests";
import { sendConfirmationEmail } from "../../../http/http-requests";

const Order = ({ match }) => {
  const [detailData, setDetailData] = useState({});
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();

  const date = new Date();
  const getPlayerData = async () => {
    const data = await GetPlayer(match.params.id);
    setDetailData(data.data);
  };

  const OpenCardDetails = () => {
    let address = document.getElementById("addressInput").value;
    let city = document.getElementById("cityInput").value;
    let postalCode = document.getElementById("postalCodeInput").value;
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let phone = document.getElementById("phoneInput").value;
    let email = document.getElementById("emailInput").value;
    if (
      address == "" ||
      city == "" ||
      postalCode == "" ||
      firstName == "" ||
      lastName == "" ||
      phone == "" ||
      email == ""
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      document.getElementById("paymentDetails").classList.remove("d-none");
    }
  };

  const onSubmitOrder = async (data) => {
    const userId = window.localStorage.getItem("UserId");
    data.userId = userId;
    data.shirtName = detailData.firstName + " " + detailData.lastName;
    data.shirtNo = detailData.playerNo;
    data.shirtPrice = detailData.price;
    data.shirtType = detailData.kit;

    try {
      let result = await PostOrderHttpRequest(data);
      let contact = {
        id: result.data._id,
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
        subject: "Confirmation Email",
      };
      let isSend = await sendConfirmationEmail(contact);

      if (isSend.status) {
        setSucces(true);
        setTimeout(() => {
          setSucces(false);
        }, 3000);
        document.getElementById("#orderForm").reset();
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    getPlayerData();
  }, []);

  let errorNameRequired;
  let noSpaceName;
  let nameHasNumbers;
  let errorLastNameRequired;
  let noSpaceLastName;
  let lastNameHasNumbers;
  let errorEmailRequired;
  let errorEmailInvalid;
  let errorEmailEmpty;
  let errorMessageRequired;
  let errorMessageInvalid;
  let errorPhoneRequired;
  let errorPhonePattern;
  let errorPhoneEmpty;
  let errorCardNumberRequired;
  let errorCardNumberPattern;
  let errorCardNumberEmpty;
  let errorExpireDateRequired;
  let errorExpireDatePattern;
  let errorExpireDateEmpty;
  let errorCvvRequired;
  let errorCvvPattern;
  let errorCvvEmpty;
  let errorCityRequired;
  let errorCityPattern;
  let errorCityEmpty;

  if (errors.firstName?.type === "required") {
    errorNameRequired = <span className="error-msg text-danger">Please enter Name</span>;
  }
  if (errors.firstName?.type == "validate") {
    noSpaceName = <span className="error-msg text-danger">No empty spaces</span>;
  }
  if (errors.firstName?.type === "pattern") {
    nameHasNumbers = <span className="error-msg text-danger">Name is not valid</span>;
  }
  if (errors.lastName?.type === "required") {
    errorLastNameRequired = (
      <span className="error-msg text-danger">Please enter Last Name</span>
    );
  }
  if (errors.lastName?.type === "validate") {
    noSpaceLastName = <span className="error-msg text-danger">No empty spaces</span>;
  }
  if (errors.lastName?.type === "pattern") {
    lastNameHasNumbers = (
      <span className="error-msg text-danger">Last Name is not valid</span>
    );
  }
  if (errors.email?.type === "required") {
    errorEmailRequired = <span className="error-msg text-danger">E-Mail is required</span>;
  }
  if (errors.email?.type === "validate") {
    errorEmailEmpty = (
      <span className="error-msg text-danger">No empty spaces</span>
    );
  }
  if (errors.email?.type === "pattern") {
    errorEmailInvalid = (
      <span className="error-msg text-danger">E-Mail Format is not valid</span>
    );
  }
  if (errors.email?.type === "validate") {
    errorEmailEmpty = (
      <span className="error-msg text-danger">No empty spaces</span>
    );
  }
  if (errors.pinCode?.type === "required") {
    errorMessageRequired = (
      <span className="error-msg text-danger">Please add message</span>
    );
  }
  if (errors.pinCode?.type === "validate") {
    errorMessageInvalid = (
      <span className="error-msg text-danger">No empty spaces</span>
    );
  }
  if (errors.phoneNumber?.type === "required") {
    errorPhoneRequired = (
      <span className="error-msg text-danger">Required Field</span>
    );
  }
  if (errors.phoneNumber?.type === "pattern") {
    errorPhonePattern = (
      <span className="error-msg text-danger">Invalid Phone Number</span>
    );
  }
  if (errors.phoneNumber?.type === "validate") {
    errorPhoneEmpty = (
      <span className="error-msg text-danger">No empty spaces</span>
    );
  }
  //CardNumber
  if (errors.cardNumber?.type === "required") {
    errorCardNumberRequired = (
      <span className="error-msg text-danger">Required Field</span>
    );
  }
  if (errors.cardNumber?.type === "pattern") {
    errorCardNumberPattern = (
      <span className="error-msg text-danger">Invalid Card Number</span>
    );
  }
  if (errors.cardNumber?.type === "validate") {
    errorCardNumberEmpty = (
      <span className="error-msg text-danger">No empty spaces</span>
    );
  }
  if (errors.expireDate?.type === "required") {
    errorExpireDateRequired = (
      <span className="error-msg text-danger">Required Field</span>
    );
  }
  if (errors.expireDate?.type === "pattern") {
    errorExpireDatePattern = (
      <span className="error-msg text-danger">Invalid Expire Date</span>
    );
  }
  if (errors.expireDate?.type === "validate") {
    errorExpireDateEmpty = (
      <span className="error-msg text-danger">No empty spaces</span>
    );
  }
  if (errors.cvv?.type === "required") {
    errorCvvRequired = (
      <span className="error-msg text-danger">Required Field</span>
    );
  }
  if (errors.cvv?.type === "pattern") {
    errorCvvPattern = (
      <span className="error-msg text-danger">Invalid Cvv</span>
    );
  }
  if (errors.cvv?.type === "validate") {
    errorCvvEmpty = (
      <span className="error-msg text-danger">No empty spaces</span>
    );
  }
  if (errors.city?.type === "required") {
    errorCityRequired = (
      <span className="error-msg text-danger">Required Field</span>
    );
  }
  if (errors.city?.type === "pattern") {
    errorCityPattern = (
      <span className="error-msg text-danger">Invalid City</span>
    );
  }
  if (errors.city?.type === "validate") {
    errorCityEmpty = (
      <span className="error-msg text-danger">No empty spaces</span>
    );
  }
  const trapSpacesForRequiredFields = (value) => !!value.trim();
  
  return (
    <div className="OrderPage">
      <ProductBanner />
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 row m-0 firstBox mb-2">
            <div className="col-6 firstBoxTitle">YOUR BASKET</div>
            <div className="col-6 firstBoxOrderId">
              You Have Selected 1 Product <br />
              Your Order ID Is 2221 <br />
              {date.getDate() +
                "/" +
                date.getMonth() +
                "/" +
                date.getFullYear()}
            </div>
          </div>
          <div className="col-lg-10 row m-0 secondBox">
            <div className="col-6 firstBoxTitle">
              <div className="col-lg-12 pb-3">PRODUCT NAME</div>
              <div className="col-lg-12 text-secondary text-uppercase">
                <img src={detailData.photo} width="120" />
                {detailData.firstName + " " + detailData.lastName} (
                {detailData.playerNo})
              </div>
            </div>
            <div className="col-6 row m-0 firstBoxOrderId details">
              <div className="col-lg-6">SHIRT TYPE</div>
              <div className="col-lg-6">PRICE</div>
              <div className="col-lg-6 text-secondary">{detailData.kit}</div>
              <div className="col-lg-6 text-secondary">
                {detailData.price} €
              </div>
            </div>
          </div>
          <div className="col-lg-10 spaces"></div>
          <form
            id="orderForm"
            className="col-lg-10 p-0"
            onSubmit={handleSubmit(onSubmitOrder)}
          >
            <div className="col-lg-12 d-flex flex-column text-center justify-content-center thirdbox">
              <h1 className={`errorMessage ${error ? "active" : ""}`}>
                Please Fill All the fields before checkout
              </h1>
              <h1 className={`succesMessage ${succes ? "active" : ""}`}>
                Your order has been placed please confirm the order on email !
              </h1>
            </div>

            <div className="col-lg-12 d-flex justify-content-center thirdbox">
              <div className="row col-lg-10 m-0 justify-content-between">
                <div className="col-lg-4 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">WRITE YOUR ADDRESS</label>
                    <input
                      type="text"
                      className="form-control"
                      id="addressInput"
                      name="address"
                      ref={register({ required: true })}
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">WRITE YOUR CITY</label>
                    <input
                      type="text"
                      className="form-control"
                      id="cityInput"
                      name="city"
                      placeholder="City"
                      ref={register({
                        required: true,
                        pattern:
                        /^[a-zA-Z ]*$/,
                        validate: trapSpacesForRequiredFields
                      })}
                    />
                    {errorCityRequired}
                    {errorCityPattern}
                    {errorCityEmpty}
                  </div>
                </div>
                <div className="col-lg-4 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">POSTAL CODE</label>
                    <input
                      type="text"
                      className="form-control"
                      id="postalCodeInput"
                      name="postalCode"
                      ref={register({ required: true })}
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">FIRST NAME</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstNameInput"
                      name="firstName"
                      placeholder="First Name"
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
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">LAST NAME</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastNameInput"
                      name="lastName"
                      placeholder="Last Name"
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
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">PHONE NUMBER</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneInput"
                      name="phoneNumber"
                      ref={register({ required: true,
                        pattern:
                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                        validate: trapSpacesForRequiredFields })}
                      placeholder="Phone Number"
                    />
                    {errorPhoneEmpty}
                    {errorPhonePattern}
                    {errorPhoneRequired}
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">EMAIL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="emailInput"
                      name="email"
                      placeholder="Email"
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
                <div className="form-group">
                  <div className="col-lg-12" style={{ textAlign: "right" }}>
                    <button
                      type="button"
                      onClick={() => {
                        OpenCardDetails();
                      }}
                      className="btn"
                    >
                      Continue to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
           
            <div
              id="paymentDetails"
              className="col-lg-12 d-flex justify-content-center thirdbox d-none"
            >
              
              <div className="row col-lg-10 m-0 justify-content-between">
              <div className="col-lg-12 p-0 d-flex flex-column text-center justify-content-center thirdbox">
                <h1 className={`succesMessage ${succes ? "active" : ""}`}>
                  Your order has been placed please confirm the order on email !
                </h1>
              </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">CARD NUMBER</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cardNumber"
                      placeholder="Card Number"
                      ref={register({
                        required: true,
                        pattern:
                        /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                        validate: trapSpacesForRequiredFields
                      })}
                    />
                    {errorCardNumberRequired}
                    {errorCardNumberPattern}
                    {errorCardNumberEmpty}
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">EXPIRE DATE</label>
                    <input
                      type="text"
                      className="form-control"
                      name="expireDate"
                      placeholder="Expire Date"
                      ref={register({
                        required: true,
                        pattern:
                        /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                        validate: trapSpacesForRequiredFields
                      })}
                    />
                    {errorExpireDateRequired}
                    {errorExpireDatePattern}
                    {errorExpireDateEmpty}
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cvv"
                      placeholder="CVV"
                      ref={register({
                        required: true,
                        pattern:
                        /^[0-9]{3,4}$/,
                        validate: trapSpacesForRequiredFields
                      })}
                    />
                    {errorCvvRequired}
                    {errorCvvPattern}
                    {errorCvvEmpty}
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">Comment</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pinCode"
                      placeholder="Comment"
                      ref={register({ required: true ,validate: trapSpacesForRequiredFields })}
                    />
                    {errorMessageRequired}
                    {errorMessageInvalid}
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12" style={{ textAlign: "right" }}>
                    <button type="submit" className="btn">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="col-lg-10 row m-0 justify-content-end fourthBox">
            <div className="col-lg-8 d-flex justify-content-around">
              <div className="pr-5">TOTAL COST:</div>
              <div>{detailData.price} €</div>
            </div>
          </div>
          <div
            className="lastBox col-lg-10"
            style={{ height: "30px", background: "#454C54" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Order;
