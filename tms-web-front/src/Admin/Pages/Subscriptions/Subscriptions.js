import './Subscriptions.css';
import { useEffect, useState } from "react";
import { GetSubscriptionsHttpRequest } from '../../../httpNode/http-requests';

const Subscriptions = () => {
    const [subscriptions, setSubscriptionsData] = useState([]);

    const tableDataHeandler = async () => {
        const allSubscriptions = await GetSubscriptionsHttpRequest();
        setSubscriptionsData(allSubscriptions.data);
    }

    useEffect(() => {
        tableDataHeandler();
    }, []);

    return (
        <div className="SubscriptionsPage">
            <h1>Subscriptions</h1>
            <div className="tableWrapper">
                <div className="tableWrapper table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscriptions.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.email}</td>
                                        <td>{element.subscriptionDate.substring(0,10)}</td>
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

export default Subscriptions;