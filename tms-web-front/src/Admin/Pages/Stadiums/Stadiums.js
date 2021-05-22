import {useEffect,useState} from "react";
import {StadiumsTable} from '../../../http/http-requests'

const Stadiums = ()=>{
    const [stadiums,setStadiumsData] = useState([]);
    
    const tableDataHeandler = async () =>{
        const allStadiums = await StadiumsTable();
        setStadiumsData(allStadiums.data);
    }

    useEffect(()=>{
        tableDataHeandler();
    },[]);

    return(
        <div className="stadiumsPage">
            <h1>Leagues</h1>
            <div className="tableWrapper">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Image</th>
                        <th scope="col">Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {stadiums.map((element,index) => {
                        return (
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.capacity}</td>
                                <td>{element.image}</td>
                                <td>{element.rank}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Stadiums;