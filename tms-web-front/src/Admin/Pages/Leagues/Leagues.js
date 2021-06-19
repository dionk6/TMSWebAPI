import {useEffect,useState} from "react";
import {LeaguesTable,GetLeague,LeaugesHttpRequestDelete} from '../../../http/http-requests';
import ModalLeague from '../../Components/ModalLeague/ModalLeague';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';

import './Leauges.css'

const Leagues = () =>{
    const [leagues,setLeaguesData] = useState([]);
    const [league,setLeague] = useState({});
    const [openModal,setOpenModal] = useState(false);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const [deleteId,setDeleteId] = useState(null);
    
    const tableDataHeandler = async () =>{
        const allLeagues = await LeaguesTable();
        setLeaguesData(allLeagues.data);
    }

    const AddEdit = async (id) => {
        if(id !== "0"){
            let t = await GetLeague(id);
            setLeague(t.data);
            setOpenModal(true);
        }else{
            setLeague({});
            setOpenModal(true);
        }
    }

    const DeleteLeague = async (state,id) => {
        setDeleteId(id);
        if(state===1){
            await LeaugesHttpRequestDelete(deleteId);
        }
        setOpenDeleteModal(!openDeleteModal);
    }

    const closeModalHeandler = () =>{
        setLeague({});
        setOpenModal(false);
    }
    useEffect(()=>{
        tableDataHeandler();
    },[openModal,openDeleteModal]);

    return(
        <div className="leaugesPage">
            <h1>Leagues</h1>
            <div className="tableWrapper">
                <button onClick={()=>{AddEdit("0")}} className="addButton">Add</button>
                <div className="tableWrapper table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Logo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Country</th>
                                <th scope="col">Founded Year</th>
                                <th scope="col">Max Nr Team</th>
                                <th scope="col">TV Partner</th>
                                <th scope="col">CurrentChampion</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leagues.map((element,index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={element.logo} style={{width: "50px"}} alt="Logo" />
                                        </td>
                                        <td>{element.name}</td>
                                        <td>{element.country}</td>
                                        <td>{element.foundedYear}</td>
                                        <td>{element.maxNrTeam}</td>
                                        <td>{element.tvPartner}</td>
                                        <td>{element.currentChampion}</td>
                                        <td>{element.description}</td>
                                        <td>
                                            <button onClick={()=>{AddEdit(element.id)}} className="editButton">Edit</button>  
                                            <button onClick={()=>{DeleteLeague(0,element.id)}} className="deleteButton">Delete</button>  
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalLeague openModal={openModal} league={league} closeModalHeandler={closeModalHeandler}/>
            <DeleteModal openDeleteModal={openDeleteModal} deleteId={deleteId} Delete={DeleteLeague}/>
        </div>
    );
}

export default Leagues;