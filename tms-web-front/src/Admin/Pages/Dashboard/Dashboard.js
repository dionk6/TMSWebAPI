import "./Dashboard.css";
import ConfirmationChart from '../../Components/ConfirmationChart/ConfirmationChart';

const Dashboard = () => {
    return (
        <div className="DashboardPage">
            <h1>Dashboard</h1>
            <ConfirmationChart />
        </div>
    )
}

export default Dashboard;