import {useEffect,useState} from "react"
import {playersHttpRequestTable,GetPlayer,playersHttpRequestDelete,SelectAllTeams} from "../../../http/http-requests"
import ModalPlayer from '../../Components/ModalPlayer/ModalPlayer';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';

const Players = () =>{
    const [players,setPlayers] = useState([]);
    const [player,setPlayer] = useState({});
    const [options,setOptions] = useState({});
    const [openModal,setOpenModal] = useState(false);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const [deleteId,setDeleteId] = useState(false);

    const playersTable = async () =>{
        const playersTableData = await playersHttpRequestTable();
        setPlayers(playersTableData.data);
    }

    const teamOptions = async () =>{
        const allTeams = await SelectAllTeams();
        setOptions(allTeams.data);
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
    
    const DeletePlayer = async (status,id) =>{
        setDeleteId(id)
        if(status===1){
            await playersHttpRequestDelete(deleteId);
        }
        setOpenDeleteModal(!openDeleteModal);
    }

    const closeModalHeandler = () =>{
        setPlayer({});
        setOpenModal(false);
    }

    useEffect(()=>{
        playersTable();
        teamOptions();
    },[openModal,openDeleteModal]);

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
                                            <button onClick={()=>{DeletePlayer(0,player.id)}}>Delete</button>  
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <ModalPlayer openModal={openModal} player={player} options={options} closeModalHeandler={closeModalHeandler} />
            <DeleteModal openDeleteModal={openDeleteModal} delteId={deleteId}  Delete={DeletePlayer} />
        </div>
    );
}

export default Players