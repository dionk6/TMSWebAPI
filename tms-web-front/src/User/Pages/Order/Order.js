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
  const { register, handleSubmit } = useForm();

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
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    getPlayerData();
  }, []);
  
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
                      ref={register({ required: true })}
                      placeholder="City"
                    />
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
                      ref={register({ required: true })}
                      placeholder="First Name"
                    />
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
                      ref={register({ required: true })}
                      placeholder="Last Name"
                    />
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
                      ref={register({ required: true })}
                      placeholder="Phone Number"
                    />
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
                      ref={register({ required: true })}
                      placeholder="Email"
                    />
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
                      ref={register({ required: true })}
                      placeholder="Card Number"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">EXPIRE DATE</label>
                    <input
                      type="text"
                      className="form-control"
                      name="expireDate"
                      ref={register({ required: true })}
                      placeholder="Expire Date"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cvv"
                      ref={register({ required: true })}
                      placeholder="CVV"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-5">
                  <div className="form-group">
                    <label className="p-0 pb-3">Comment</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pinCode"
                      ref={register({ required: true })}
                      placeholder="Comment"
                    />
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
