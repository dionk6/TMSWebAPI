import { useEffect, useState } from "react";
import { LeaguesTable, GetLeague, LeaugesHttpRequestDelete } from '../../../http/http-requests';
import ModalLeague from '../../Components/ModalLeague/ModalLeague';
import DeleteModal from '../../Components/DeleteModal/DeleteModal';

import './Leauges.css'

const Leagues = () => {
    const [leagues, setLeaguesData] = useState([]);
    const [league, setLeague] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const tableDataHeandler = async () => {
        const allLeagues = await LeaguesTable();
        setLeaguesData(allLeagues.data);
    }

    const AddEdit = async (id) => {
        if (id !== "0") {
            let t = await GetLeague(id);
            setLeague(t.data);
            setOpenModal(true);
        } else {
            setLeague({});
            setOpenModal(true);
        }
    }

    const DeleteLeague = async (state, id) => {
        setDeleteId(id);
        if (state === 1) {
            await LeaugesHttpRequestDelete(deleteId);
        }
        setOpenDeleteModal(!openDeleteModal);
    }

    const closeModalHeandler = () => {
        setLeague({});
        setOpenModal(false);
    }
    useEffect(() => {
        tableDataHeandler();
    }, [openModal, openDeleteModal]);

    return (
        <div className="leaugesPage">
            <h1>Leagues</h1>
            <div className="tableWrapper">
                <button onClick={() => { AddEdit("0") }} className="addButton">Add</button>
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
                            {leagues.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={element.logo} style={{ width: "50px" }} alt="Logo" />
                                        </td>
                                        <td>{element.name}</td>
                                        <td>{element.country}</td>
                                        <td>{element.foundedYear}</td>
                                        <td>{element.maxNrTeam}</td>
                                        <td>{element.tvPartner}</td>
                                        <td>{element.currentChampion}</td>
                                        <td>{element.description.substring(0, 40) + "..."}</td>
                                        <td>
                                            <button onClick={() => { AddEdit(element.id) }} className="editButton">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20pt"
                                                    height="20pt"
                                                    viewBox="0 0 512 511"
                                                >
                                                    <path d="M405.332 256.484c-11.797 0-21.332 9.559-21.332 21.332v170.668c0 11.754-9.559 21.332-21.332 21.332H64c-11.777 0-21.332-9.578-21.332-21.332V149.816c0-11.754 9.555-21.332 21.332-21.332h170.668c11.797 0 21.332-9.558 21.332-21.332 0-11.777-9.535-21.336-21.332-21.336H64c-35.285 0-64 28.715-64 64v298.668c0 35.286 28.715 64 64 64h298.668c35.285 0 64-28.714 64-64V277.816c0-11.796-9.54-21.332-21.336-21.332zm0 0"></path>
                                                    <path d="M200.02 237.05a10.793 10.793 0 00-2.922 5.438l-15.082 75.438c-.703 3.496.406 7.101 2.922 9.64a10.673 10.673 0 007.554 3.114c.68 0 1.387-.063 2.09-.211l75.414-15.082c2.09-.43 3.988-1.43 5.461-2.926l168.79-168.79-75.415-75.41zm0 0M496.383 16.102c-20.797-20.801-54.633-20.801-75.414 0l-29.524 29.523 75.414 75.414 29.524-29.527C506.453 81.465 512 68.066 512 53.816s-5.547-27.648-15.617-37.714zm0 0"></path>
                                                </svg>
                                            </button>
                                            <button onClick={() => { DeleteLeague(0, element.id) }} className="deleteButton">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20pt"
                                                    height="20pt"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M424 64h-88V48c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16H88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zM208 48c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96zM78.364 184a5 5 0 00-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042a5 5 0 00-4.994-5.238zM320 224c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalLeague openModal={openModal} league={league} closeModalHeandler={closeModalHeandler} />
            <DeleteModal openDeleteModal={openDeleteModal} deleteId={deleteId} Delete={DeleteLeague} />
        </div>
    );
}

export default Leagues;