import {useEffect,useState} from "react";
import ModalTeams from '../../Components/ModalTeams/ModalTeams'
import {TeamsTable,GetTeam} from '../../../http/http-requests'

import './Teams.css'

const Stadiums = ()=>{
    const [teams,setTeamsData] = useState([]);
    const [team,setTeam] = useState({});
    
    const tableDataHeandler = async () =>{
        const allTeams = await TeamsTable();
        setTeamsData(allTeams.data);
    }

    const AddEdit = async (id) => {
        if(id !== "0"){
            let t = await GetTeam(id);
            setTeam(t.data);
        }else{
            setTeam({});
        }
        OpenModal();
    }

    const OpenModal = () => {
        
    }

    useEffect(()=>{
        tableDataHeandler();
    },[]);

    return(
        <div className="stadiumsPage">
            <h1>Teams</h1>
            <div className="tableWrapper">
                <button onClick={()=>{AddEdit("0")}} className="addButton">Add</button> 
                <div className="tableWrapper table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">City</th>
                                <th scope="col">Logo</th>
                                <th scope="col">Founded Year</th>
                                <th scope="col">Manager</th>
                                <th scope="col">Trophies</th>
                                <th scope="col">Owner</th>
                                <th scope="col">Budget</th>
                                <th scope="col">League</th>
                                <th scope="col">Stadium</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map((element,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.name}</td>
                                        <td>{element.city}</td>
                                        <td>{element.logo}</td>
                                        <td>{element.foundedYear}</td>
                                        <td>{element.manager}</td>
                                        <td>{element.trophies}</td>
                                        <td>{element.owner}</td>
                                        <td>{element.budget}</td>
                                        <td>{element.league}</td>
                                        <td>{element.stadium}</td>
                                        <td>
                                            <button onClick={()=>{AddEdit(element.id)}} className="editButton">Edit</button>  
                                            <button className="deleteButton">Delete</button>  
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalTeams/>
        </div>
    );
}

export default Stadiums;