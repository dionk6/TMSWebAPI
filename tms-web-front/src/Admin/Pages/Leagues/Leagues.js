import {useEffect,useState} from "react";
import {LeaguesTable} from '../../../http/http-requests'
const Leagues = () =>{
    const [leagues,setLeaguesData] = useState([]);
    
    const tableDataHeandler = async () =>{
        const allLeagues = await LeaguesTable();
        setLeaguesData(allLeagues.data);
    }

    useEffect(()=>{
        tableDataHeandler();
    },[]);

    return(
        <div className="leaugesPage">
            <h1>Leagues</h1>
            <div className="tableWrapper table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">Founded Year</th>
                        <th scope="col">Max Nr Team</th>
                        <th scope="col">TV Partner</th>
                        <th scope="col">Logo</th>
                        <th scope="col">CurrentChampion</th>
                    </tr>
                </thead>
                <tbody>
                    {leagues.map((element,index) => {
                        return (
                            <tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.country}</td>
                                <td>{element.foundedYear}</td>
                                <td>{element.maxNrTeam}</td>
                                <td>{element.tvPartner}</td>
                                <td>{element.logo}</td>
                                <td>{element.currentChampion}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Leagues;