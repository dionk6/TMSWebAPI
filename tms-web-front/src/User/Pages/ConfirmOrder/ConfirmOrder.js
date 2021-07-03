import { useState, useEffect } from "react";
import { useHistory  } from 'react-router-dom'
import { ConfirmOrderHttpRequest,GetConfirmOrderHttpRequest,GetOrderHttpRequest } from "../../../httpNode/http-requests";
import "./ConfirmOrder.css";

const ConfirmOrder = ({ match }) => {
  const [order,setOrder] = useState({});
  const [initAnimation, setInitAnimation] = useState(false);
  const routerHistory = useHistory();

  const ConfirmOrder = async () => {
      const id = match.params.id;
      const data = await GetConfirmOrderHttpRequest(id);
      const order = await GetOrderHttpRequest(id);
      if(data.data == null && order.data != null){
        const model = {
          _id: match.params.id 
        }
        await ConfirmOrderHttpRequest(model);
      }else{
        routerHistory.push('/');
      }
  };

  useEffect(()=>{
      ConfirmOrder();
      setTimeout(()=>{
        setInitAnimation(true);

      },500)
      setTimeout(() => {
        routerHistory.push('/');
      }, 5000);
  },[]);

  return (
    <div className="ConfirmOrderPage">
      <div className={`confirmOrderSucces ${initAnimation ? "active" : ""}`}>
        <div className="success-animation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="checkmark"
            viewBox="0 0 52 52"
          >
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              className="checkmark__circle"
            ></circle>
            <path
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              className="checkmark__check"
            ></path>
          </svg>

          <h1>You succesfully confirmed your order !</h1>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
