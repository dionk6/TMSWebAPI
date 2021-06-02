import {useEffect,useState} from 'react';
import {useForm} from "react-hook-form";
import {LeaugesHttpRequestPost,LeaugesHttpRequestPut} from '../../../http/http-requests';
import './ModalLeague.css'
const ModalLeague = (props) =>{
    const [league, setLeague] = useState({});

    const { register , handleSubmit } = useForm();

    useEffect(()=>{
        setLeague(props.league);
    },[props.league]);

    function handleChange(evt) {
        const value = evt.target.value;
        let inputName = evt.target.name;
        setLeague({
            id: (inputName === "id" ? value : league.id),
            name: (inputName === "name" ? value : league.name),
            country: (inputName === "country" ? value : league.country),
            foundedYear: (inputName === "foundedYear" ? value : league.foundedYear),
            maxNrTeam: (inputName === "maxNrTeam" ? value : league.maxNrTeam),
            logo: league.logo,
            tvPartner: (inputName === "tvPartner" ? value : league.tvPartner),
            currentChampion: (inputName === "currentChampion" ? value : league.currentChampion)
        });
    }

    const onSubmitLeague = async (data) =>{
        data.logo=data.logo[0];
        let formData = new FormData();
        formData.append('id',data.id);
        formData.append('name',data.name);
        formData.append('country',data.country);
        formData.append('foundedYear',data.foundedYear);
        formData.append('maxNrTeam',data.maxNrTeam);
        formData.append('tvPartner',data.tvPartner);
        formData.append('logo',data.logo);
        formData.append('currentChampion',data.currentChampion);

        try{
            if(data.id !== ""){
                await LeaugesHttpRequestPut(formData);
            }else{
                await LeaugesHttpRequestPost(formData);
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
                    <form onSubmit={handleSubmit(onSubmitLeague)}>
                        <input type="hidden" value={league.id != null ? league.id : ""} name="id" ref={register({required: false})} />
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center mb-3">
                                    <img src={league.logo} style={{width: "150px",padding: "10px",background: "white",borderRadius: "20px"}} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" value={league.name != null ? league.name : ""} name="name" onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Country</label>
                                    <input type="text" value={league.country != null ? league.country : ""} onChange={handleChange} className="form-control" name="country" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Founded Year</label>
                                    <input type="number" value={league.foundedYear != null ? league.foundedYear : ""} onChange={handleChange} className="form-control" name="foundedYear" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Max Nr Team</label>
                                    <input type="number" value={league.maxNrTeam != null ? league.maxNrTeam : ""} onChange={handleChange} className="form-control" name="maxNrTeam" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Tv Partner</label>
                                    <input type="text" value={league.tvPartner != null ? league.tvPartner : ""} onChange={handleChange} className="form-control" name="tvPartner" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Logo</label>
                                    <input type="file" className="form-control" name="logo" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Current Champion</label>
                                    <input type="text" value={league.currentChampion != null ? league.currentChampion : ""} onChange={handleChange} className="form-control" name="currentChampion" ref={register({required: true})} />
                                </div>
                            </div>
                                {props.league.id != null ? <button type="submit" className="modalButton">Update</button> : <button type="submit" className="modalButton">Save</button> }
                        </div>
                        
                        
                    </form>
                </div>
            </div>
       </div>
    );
}

export default ModalLeague;
