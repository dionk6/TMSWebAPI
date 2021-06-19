import {useEffect,useState} from "react";
import ModalTeams from '../../Components/ModalTeams/ModalTeams'
import {TeamsTable,GetTeam,DeleteTeam,SelectAllLeagues,SelectAllStadiums} from '../../../http/http-requests'
import DeleteModal from '../../Components/DeleteModal/DeleteModal';

import './Teams.css'

const Stadiums = ()=>{
    const [teams,setTeamsData] = useState([]);
    const [team,setTeam] = useState({});
    const [openModal,setOpenModal] = useState(false);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const [deleteId,setDeleteId] = useState(null);

    const [leaguesOptions,setLeaguesOptions] = useState({});
    const [stadiumsOptions,setStadiumOptions] = useState({});


    const getOptions = async () =>{
        const allLeagues = await SelectAllLeagues();
        setLeaguesOptions(allLeagues.data);

        const allStadiums = await SelectAllStadiums();
        setStadiumOptions(allStadiums.data);
    }
    
    const tableDataHeandler = async () =>{
        const allTeams = await TeamsTable();
        setTeamsData(allTeams.data);
    }

    const AddEdit = async (id) => {
        if(id !== "0"){
            let t = await GetTeam(id);
            setTeam(t.data);
            setOpenModal(true);
        }else{
            setTeam({});
            setOpenModal(true);
        }
    }

    const DeleteLeague = async (state,id) => {
        setDeleteId(id);
        if(state===1){
            await DeleteTeam(deleteId);
        }
        setOpenDeleteModal(!openDeleteModal);
    }


    const closeModalHeandler = () =>{
        setTeam({});
        setOpenModal(false);
    }

    useEffect(()=>{
        tableDataHeandler();
        getOptions();
    },[openModal,openDeleteModal]);

    return(
        <div className="stadiumsPage">
            <h1>Teams</h1>
            <div className="tableWrapper">
                <button onClick={()=>{AddEdit("0")}} className="addButton">Add</button> 
                <div className="tableWrapper table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Logo</th>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                                <th scope="col">Founded Year</th>
                                <th scope="col">Manager</th>
                                <th scope="col">Trophies</th>
                                <th scope="col">Owner</th>
                                <th scope="col">Budget</th>
                                <th scope="col">Description</th>
                                <th scope="col">League</th>
                                <th scope="col">Stadium</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((element,index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={element.logo} style={{width: "50px"}} alt="Logo" />
                                        </td>
                                        <td>{element.name}</td>
                                        <td>{element.city}</td>
                                        <td>{element.foundedYear}</td>
                                        <td>{element.manager}</td>
                                        <td>{element.trophies}</td>
                                        <td>{element.owner}</td>
                                        <td>{element.budget}</td>
                                        <td>{element.description}</td>
                                        <td>{element.league}</td>
                                        <td>{element.stadium}</td>
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
            <ModalTeams openModal={openModal} team={team} leaguesOptions={leaguesOptions} stadiumsOptions={stadiumsOptions} closeModalHeandler={closeModalHeandler}/>
            <DeleteModal openDeleteModal={openDeleteModal} deleteId={deleteId} Delete={DeleteLeague}/>
        </div>
    );
}

export default Stadiums;