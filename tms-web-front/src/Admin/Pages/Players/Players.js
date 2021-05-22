import {useEffect,useState} from "react"
import {playersHttpRequestTable,GetPlayer} from "../../../http/http-requests"
import ModalPlayer from '../../Components/ModalPlayer/ModalPlayer';
const Players = () =>{
    const [players,setPlayers] = useState([]);
    const [player,setPlayer] = useState({});
    const [openModal,setOpenModal] = useState(false);

    const playersTable = async () =>{
        const playersTableData = await playersHttpRequestTable();
        setPlayers(playersTableData.data);
    }

    const AddEdit = async (id) => {
        if(id !== "0"){
            let t = await GetPlayer(id);
            setPlayer(t.data);
            setOpenModal(true);
        }else{
            setPlayer({});
            setOpenModal(true);
        }
    }

    const closeModalHeandler = () =>{
        setPlayer({});
        setOpenModal(false);
    }

    useEffect(()=>{
        playersTable();
    },[]);

    return(
        <div>
            <h1>Players</h1>
            <div className="tableWrapper table-responsive">
            <button onClick={()=>{AddEdit("0")}}>Add</button>
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
                            <th scope="col">Actions</th>
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
                                        <td>
                                            <button onClick={()=>{AddEdit(player.id)}}>Edit</button>  
                                            <button>Delete</button>  
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <ModalPlayer openModal={openModal} player={player} closeModalHeandler={closeModalHeandler} />
        </div>
    );
}

export default Players