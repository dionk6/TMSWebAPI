import {useEffect,useState} from 'react';
import {useForm} from "react-hook-form";
import {LeaugesHttpRequestPost,LeaugesHttpRequestPut} from '../../../http/http-requests';
import './ModalLeague.css'
const ModalLeague = (props) =>{
    const [state, setState] = useState({})

    const { register , handleSubmit } = useForm();

    useEffect(()=>{
        setState(props.league);
    },[props.league]);

    function handleChange(evt) {
        const value = evt.target.value;
        var inputName = evt.target.name;
        setState({
            id: (inputName === "id" ? value : state.id),
            name: (inputName === "name" ? value : state.name),
            country: (inputName === "country" ? value : state.country),
            foundedYear: (inputName === "foundedYear" ? value : state.foundedYear),
            maxNrTeam: (inputName === "maxNrTeam" ? value : state.maxNrTeam),
            tvPartner: (inputName === "tvPartner" ? value : state.tvPartner),
            logo: (inputName === "logo" ? value : state.logo),
            currentChampion: (inputName === "currentChampion" ? value : state.currentChampion)
        });
    }

    const onSubmitLeague = async (data) =>{
        try{
            if(data.id !== ""){
                await LeaugesHttpRequestPut(data);
            }else{
                await LeaugesHttpRequestPost(data);
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
                        <input type="hidden" value={state.id != null ? state.id : ""} name="id" ref={register({required: false})} />

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" value={state.name != null ? state.name : ""} name="name" onChange={handleChange} className="form-control" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Country</label>
                                    <input type="text" value={state.country != null ? state.country : ""} onChange={handleChange} className="form-control" name="country" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Founded Year</label>
                                    <input type="number" value={state.foundedYear != null ? state.foundedYear : ""} onChange={handleChange} className="form-control" name="foundedYear" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Max Nr Team</label>
                                    <input type="number" value={state.maxNrTeam != null ? state.maxNrTeam : ""} onChange={handleChange} className="form-control" name="maxNrTeam" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Tv Partner</label>
                                    <input type="text" value={state.tvPartner != null ? state.tvPartner : ""} onChange={handleChange} className="form-control" name="tvPartner" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Logo</label>
                                    <input type="text" value={state.logo != null ? state.logo : ""} onChange={handleChange} className="form-control" name="logo" ref={register({required: true})} />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Current Champion</label>
                                    <input type="text" value={state.currentChampion != null ? state.currentChampion : ""} onChange={handleChange} className="form-control" name="currentChampion" ref={register({required: true})} />
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
