import { useEffect, useState } from "react";
import './Order.css'
import { GetOrdersHttpRequest,GetAllConfirmOrderHttpRequest } from '../../../httpNode/http-requests';

const Orders = () => {
    const [orders, setOrdersData] = useState([]);
    const [allConfirmedOrders, setConfirmedOrders] = useState([]);

    const tableDataHeandler = async () => {
        const allOrders = await GetOrdersHttpRequest();
        setOrdersData(allOrders.data);

        const allConfirmedOrders = await GetAllConfirmOrderHttpRequest();
        setConfirmedOrders(allConfirmedOrders.data);
    }

    const IsConfirmed = (id) => {
        let res = "No";
        allConfirmedOrders.map((element,index)=>{
            console.log(element._id,id);
            if(element._id == id && element.confirmedStatus){
                res = "Yes";
            }
        })
        return res;
    }

    useEffect(() => {
        tableDataHeandler();
    }, []);

    return (
        <div className="adminOrders">
            <h1>Orders</h1>
            <div className="tableWrapper">
                <div className="tableWrapper table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Shirt</th>
                                <th scope="col">Price</th>
                                <th scope="col">Confirmed</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.firstName}</td>
                                        <td>{element.lastName}</td>
                                        <td>{element.phoneNumber}</td>
                                        <td>{element.email}</td>
                                        <td>{element.address+" - "+element.city+" "+element.postalCode}</td>
                                        <td>{element.shirtName+" "+element.shirtType+" ("+element.shirtNo+")"}</td>
                                        <td>{element.shirtPrice}€</td>
                                        <td>{IsConfirmed(element._id)}</td>
                                        <td>{element.updatedDate.substring(0,10)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Orders;