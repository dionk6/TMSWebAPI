import {useEffect,useState} from 'react';
import {useForm} from "react-hook-form";
import {LeaugesHttpRequestPost,LeaugesHttpRequestPut,SetTeam,AddTeam} from '../../../http/http-requests';

import './ModalTeams.css'

const ModalTeams = (props) =>{
    const [team, setTeam] = useState({});

    const { register , handleSubmit } = useForm();

    useEffect(()=>{
        setTeam(props.team);
    },[props.team]);

    function handleChange(evt) {
        const value = evt.target.value;
        let inputName = evt.target.name;
        setTeam({
            id: (inputName === "id" ? value : team.id),
            name: (inputName === "name" ? value : team.name),
            city: (inputName === "city" ? value : team.city),
            foundedYear: (inputName === "foundedYear" ? value : team.foundedYear),
            manager: (inputName === "manager" ? value : team.manager),
            trophies: (inputName === "trophies" ? value : team.trophies),
            owner: (inputName === "owner" ? value : team.owner),
            logo: team.logo,
            budget: (inputName === "budget" ? value : team.budget),
            leagueId: (inputName === "leagueId" ? value : team.leagueId),
            stadiumId: (inputName === "stadiumId" ? value : team.stadiumId)
        });
    }

    const onSubmitTeam = async (data) =>{
        data.logo=data.logo[0];

        console.log(data);

        let formData = new FormData();
        formData.append('id',data.id);
        formData.append('name',data.name);
        formData.append('city',data.city);
        formData.append('foundedYear',data.foundedYear);
        formData.append('trophies',data.trophies);
        formData.append('manager',data.manager);
        formData.append('owner',data.owner);
        formData.append('logo',data.logo);
        formData.append('budget',data.budget);
        formData.append('leagueId',data.leagueId);
        formData.append('stadiumId',data.stadiumId);
        try{
            if(data.id !== ""){
                await SetTeam(formData);
            }else{
                await AddTeam(formData);
            }
        }catch(err){
            console.log(err);
        }finally{
            props.closeModalHeandler();
        }
    }

    return(
       <div className={`modalCustom ${props.openModal ? "active" : ""}`}>
           <div className="modalContent">
                <div className="modalRemove" onClick={()=>{props.closeModalHeandler()}}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="329pt"
                        height="329pt"
                        viewBox="0 0 329.269 329"
                        >
                        <path d="M194.8 164.77L323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.266 21.266 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.273 21.273 0 0015.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"></path>
                    </svg>
                </div>
                <div className="modalBodyCustom">
                    <form onSubmit={handleSubmit(onSubmitTeam)}>
                        <input type="hidden" value={team.id != null ? team.id : ""} name="id" ref={register({required: false})} />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center mb-3">
                                   {team.id !== undefined ? <img src={team.logo} className="formImagePreview" alt={team.name} /> : ""}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" name="name" className="form-control" value={team.name != null ? team.name : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" name="city" value={team.city != null ? team.city : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Logo</label>
                                    <input type="file" className="form-control" name="logo" ref={register({required: false})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Founded Year</label>
                                    <input type="number" className="form-control" name="foundedYear" value={team.foundedYear != null ? team.foundedYear : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Manager</label>
                                    <input type="text" className="form-control" name="manager" value={team.manager != null ? team.manager : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Trophies</label>
                                    <input type="number" className="form-control" name="trophies" value={team.trophies != null ? team.trophies : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Owner</label>
                                    <input type="text" className="form-control" name="owner" value={team.owner != null ? team.owner : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Budget</label>
                                    <input type="number" className="form-control" name="budget" value={team.budget != null ? team.budget : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">League</label>
                                    <input type="text" className="form-control" name="leagueId" value={team.leagueId != null ? team.leagueId : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Stadium</label>
                                    <input type="text" className="form-control" name="stadiumId" value={team.stadiumId != null ? team.stadiumId : ""} onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                            </div>
                        </div>
                        {props.team.id != null ? <button type="submit" className="modalButton">Update</button> : <button type="submit" className="modalButton">Save</button> }
                    </form>
                </div>
            </div>
       </div>
    );
}

export default ModalTeams;
