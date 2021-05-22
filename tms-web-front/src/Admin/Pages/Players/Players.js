import {useEffect,useState} from "react"
import {playersHttpRequestTable} from "../../../http/http-requests"
const Players = () =>{
    const [players,setPlayers] = useState([]);

    const playersTable = async () =>{
        const playersTableData = await playersHttpRequestTable();
        setPlayers(playersTableData.data);
    }

    useEffect(()=>{
        playersTable();
    },[]);

    return(
        <div>
            <h1>Players</h1>
            <div className="tableWrapper table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Player No</th>
                        <th scope="col">Position</th>
                        <th scope="col">Kit</th>
                        <th scope="col">Price</th>
                        <th scope="col">Team</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{player.firstName}</td>
                                    <td>{player.lastName}</td>
                                    <td>{player.age}</td>
                                    <td>{player.playerNo}</td>
                                    <td>{player.position}</td>
                                    <td>{player.kit}</td>
                                    <td>{player.price}</td>
                                    <td>{player.team}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Players