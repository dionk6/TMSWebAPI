import {useEffect,useState} from "react";
import {StadiumsTable,GetStadium,DeleteStadium} from '../../../http/http-requests'; 
import ModalStadiums from '../../Components/ModalStadiums/ModalStadiums';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';
import './Stadiums.css';

const Stadiums = ()=>{
    const [stadiums,setStadiumsData] = useState([]);
    const [stadium,setStadium] = useState({});
    const [openModal,setOpenModal] = useState(false);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const [deleteId,setDeleteId] = useState(false);
    
    const tableDataHeandler = async () =>{
        const allStadiums = await StadiumsTable();
        setStadiumsData(allStadiums.data);
    }

    const AddEdit = async (id) => {
        if(id !== "0"){
            let t = await GetStadium(id);
            setStadium(t.data);
            setOpenModal(true);
        }else{
            setStadium({});
            setOpenModal(true);
        }
    }

    const DeleteStadiumHeandler = async (status,id) =>{
        setDeleteId(id)
        if(status===1){
            await DeleteStadium(deleteId);
        }
        setOpenDeleteModal(!openDeleteModal);
    }

    const closeModalHeandler = () =>{
        setStadium({});
        setOpenModal(false);
    }

    useEffect(()=>{
        tableDataHeandler();
    },[openModal,openDeleteModal]);

    return(
        <div className="stadiumsPage">
            <h1>Leagues</h1>
            <div className="tableWrapper table-responsive">
            <button onClick={()=>{AddEdit("0")}} className="addButton">Add</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stadiums.map((stadium,index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <img src={stadium.image} style={{width: "150px"}} alt="Logo" />    
                                </td>
                                <td>{stadium.name}</td>
                                <td>{stadium.capacity}</td>
                                <td>{stadium.rank}</td>
                                <td>{stadium.description}</td>
                                <td>
                                    <button onClick={()=>{AddEdit(stadium.id)}} className="editButton">Edit</button>  
                                    <button onClick={()=>{DeleteStadiumHeandler(0,stadium.id)}}  className="deleteButton">Delete</button>  
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
            <ModalStadiums openModal={openModal} stadium={stadium} closeModalHeandler={closeModalHeandler} />
            <DeleteModal openDeleteModal={openDeleteModal} delteId={deleteId}  Delete={DeleteStadiumHeandler} />
        </div>
    );
}

export default Stadiums;