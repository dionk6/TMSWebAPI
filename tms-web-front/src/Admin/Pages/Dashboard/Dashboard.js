import "./Dashboard.css";
import ConfirmationChart from '../../Components/ConfirmationChart/ConfirmationChart';
import { getCounters } from '../../../http/http-requests';
import { GetOrdersHttpRequest } from '../../../httpNode/http-requests';
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [counters, setCounters] = useState({});
    const [orders, setOrders] = useState({});

    const GetCounters = async () => {
        var counters = await getCounters();
        setCounters(counters.data);

        var orders = await GetOrdersHttpRequest();
        setOrders(orders.data);
    }


    useEffect(() => {
        GetCounters();
    }, []);

    return (
        <div className="DashboardPage">
            <h1>Dashboard</h1>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-3 text-center mb-2">
                        <div className="paddingBox" style={{background: "#466886"}}>
                            Leagues: <span className="numbers">{counters.leaguesCounter}</span>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center mb-2">
                        <div className="paddingBox" style={{background: "#7392B7"}}>
                            Teams: <span className="numbers">{counters.teamsCounter}</span>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center mb-2">
                        <div className="paddingBox" style={{background: "#759EB8"}}>
                            Players: <span className="numbers">{counters.playersCounter}</span>
                        </div>
                    </div>
                    <div className="col-lg-3 text-center mb-2">
                        <div className="paddingBox" style={{background: "#87A8D4"}}>
                            Orders: <span className="numbers">{orders.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmationChart />
        </div>
    )
}

export default Dashboard;