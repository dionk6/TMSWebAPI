import {useEffect,useState} from "react";
import {TeamsTable} from '../../../http/http-requests'
import ModalTeams from '../../Components/ModalTeams/ModalTeams'

const Stadiums = ()=>{
    const [teams,setTeamsData] = useState([]);
    
    const tableDataHeandler = async () =>{
        const allTeams = await TeamsTable();
        setTeamsData(allTeams.data);
        
    }

    useEffect(()=>{
        tableDataHeandler();
    },[]);

    return(
        <div className="stadiumsPage">
            <h1>Teams</h1>
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
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            <ModalTeams/>
        </div>
    );
}

export default Stadiums;