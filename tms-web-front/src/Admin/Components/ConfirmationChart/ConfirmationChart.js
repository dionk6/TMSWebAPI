import "./ConfirmationChart.css";
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'
import { GetOrdersHttpRequest } from '../../../httpNode/http-requests';

const ConfirmationChart = () => {
    const [chartData, setChartData] = useState(
        {
            series: [{
                name: 'Orders',
                data: [2,1,1]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2021-07-04", "2021-07-10", "2021-07-11"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy'
                    },
                },
            },
        });

    const FillChart = async () => {
        const allOrders = await GetOrdersHttpRequest();
        const groupedBy = groupBy(allOrders.data, 'updatedDate');
        let counters = [];
        let countersDate = [];
        let allDates = [];
        allOrders.data.map((element,index)=>{
            if(allDates.indexOf(element.updatedDate) === -1){
                allDates.push(element.updatedDate);
            }
        });

        allDates.map((element,index)=>{
            countersDate.push(element);
            counters.push(groupedBy[element].length);
        });
        
        const chartData = {
            series: [{
                name: 'Orders',
                data: counters
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: countersDate
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yyyy'
                    },
                },
            },
        }
        setChartData(chartData);
    }
    // Accepts the array and key
    const groupBy = (array, key) => {
        // Return the end result
        return array.reduce((result, currentValue) => {
            // If an array already present for key, push it to the array. Else create an array and push the object
            (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
            );
            // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
            return result;
        }, {}); // empty object is the initial value for result object
    };

    


    useEffect(() => {
        FillChart();
    }, []);

    return (
        <div className="ConfirmationChart">
            <div id="chart">
                <Chart options={chartData.options} series={chartData.series} type="area" height={350} />
            </div>
        </div>
    )
}

export default ConfirmationChart;