import { useEffect, useState } from "react";
import "./Order.css";
import ProductBanner from '../../Components/ProductBanner/ProductBanner';
import { GetPlayer } from "../../../http/http-requests";

const Order = ({ match }) => {
    const [detailData, setDetailData] = useState({});
    const date = new Date();
    const getPlayerData = async () => {
        const data = await GetPlayer(match.params.id);
        setDetailData(data.data);
    };

    const OpenCardDetails = () => {
        var address = document.getElementById("addressInput").value;
        var city = document.getElementById("cityInput").value;
        var postalCode = document.getElementById("postalCodeInput").value;
        var firstName = document.getElementById("firstNameInput").value;
        var lastName = document.getElementById("lastNameInput").value;
        var phone = document.getElementById("phoneInput").value;
        var email = document.getElementById("emailInput").value;
        if (address == "" || city == "" || postalCode == "" || firstName == "" || lastName == "" || phone == "" || email == "") {
            alert("Complete all data");
        } else {
            document.getElementById("paymentDetails").classList.remove("d-none");
        }
    }

    useEffect(() => {
        getPlayerData();
    }, []);
    return (
        <div className="OrderPage">
            <ProductBanner />
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10 row m-0 firstBox mb-2">
                        <div className="col-6 firstBoxTitle">
                            YOUR BASKET
                        </div>
                        <div className="col-6 firstBoxOrderId">
                            You Have Selected 1 Product <br />
                            Your Order ID Is 2221 <br />
                            {date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()}
                        </div>
                    </div>
                    <div className="col-lg-10 row m-0 secondBox">
                        <div className="col-6 firstBoxTitle">
                            <div className="col-lg-12 pb-3">
                                PRODUCT NAME
                            </div>
                            <div className="col-lg-12 text-secondary text-uppercase">
                                <img src={detailData.photo} width="120" />
                                {detailData.firstName + " " + detailData.lastName}
                            </div>
                        </div>
                        <div className="col-6 row m-0 firstBoxOrderId details">
                            <div className="col-lg-6">
                                SHIRT TYPE
                            </div>
                            <div className="col-lg-6">
                                PRICE
                            </div>
                            <div className="col-lg-6 text-secondary">
                                {detailData.kit}
                            </div>
                            <div className="col-lg-6 text-secondary">
                                {detailData.price} €
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10 spaces"></div>
                    <form className="col-lg-10 p-0">
                        <div className="col-lg-12 d-flex justify-content-center thirdbox">
                            <div className="row col-lg-10 m-0 justify-content-between">
                                <div className="col-lg-4 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">WRITE YOUR ADDRESS</label>
                                        <input type="text" className="form-control" id="addressInput" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">WRITE YOUR CITY</label>
                                        <input type="text" className="form-control" id="cityInput" placeholder="City" />
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">POSTAL CODE</label>
                                        <input type="text" className="form-control" id="postalCodeInput" placeholder="Postal Code" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">FIRST NAME</label>
                                        <input type="text" className="form-control" id="firstNameInput" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">LAST NAME</label>
                                        <input type="text" className="form-control" id="lastNameInput" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">PHONE NUMBER</label>
                                        <input type="text" className="form-control" id="phoneInput" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">EMAIL</label>
                                        <input type="text" className="form-control" id="emailInput" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-12" style={{ textAlign: "right" }}>
                                        <button type="button" onClick={() => { OpenCardDetails() }} className="btn">Continue to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="paymentDetails" className="col-lg-12 d-flex justify-content-center thirdbox d-none">
                            <div className="row col-lg-10 m-0 justify-content-between">
                                <div className="col-lg-6 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">CARD NUMBER</label>
                                        <input type="text" className="form-control" placeholder="Card Number" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">EXPIRE DATE</label>
                                        <input type="text" className="form-control" placeholder="Expire Date" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">CVV</label>
                                        <input type="text" className="form-control" placeholder="CVV" />
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-5">
                                    <div className="form-group">
                                        <label className="p-0 pb-3">PIN CODE</label>
                                        <input type="text" className="form-control" placeholder="Pin Code" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-12" style={{ textAlign: "right" }}>
                                        <button type="submit" className="btn">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="col-lg-10 row m-0 justify-content-end fourthBox">
                        <div className="col-lg-8 d-flex justify-content-around">
                            <div className="pr-5">
                                TOTAL COST:
                            </div>
                            <div>
                                {detailData.price} €
                            </div>
                        </div>
                    </div>
                    <div className="lastBox col-lg-10" style={{ height: "30px", background: "#454C54" }}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
