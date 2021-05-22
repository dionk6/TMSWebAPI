import {useEffect,useState} from "react";
import {LeaguesTable,GetLeague} from '../../../http/http-requests';
import ModalLeague from '../../Components/ModalLeague/ModalLeague';

const Leagues = () =>{
    const [leagues,setLeaguesData] = useState([]);
    const [league,setLeague] = useState({});
    const [openModal,setOpenModal] = useState(false);
    
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

    const closeModalHeandler = () =>{
        setLeague({});
        setOpenModal(false);
    }

    useEffect(()=>{
        tableDataHeandler();
    },[]);

    return(
        <div className="leaugesPage">
            <h1>Leagues</h1>
            <div className="tableWrapper table-responsive">
            <button onClick={()=>{AddEdit("0")}}>Add</button>
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
                            <th scope="col">Action</th>
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
                                    <td>
                                        <button onClick={()=>{AddEdit(element.id)}}>Edit</button>  
                                        <button>Delete</button>  
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <ModalLeague openModal={openModal} league={league} closeModalHeandler={closeModalHeandler}/>
        </div>
    );
}

export default Leagues;