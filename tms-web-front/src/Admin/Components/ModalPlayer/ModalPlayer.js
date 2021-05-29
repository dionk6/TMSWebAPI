import {useEffect,useState} from 'react';
import {useForm} from "react-hook-form";
import {playersHttpRequestPut,playersHttpRequestPost} from '../../../http/http-requests';
import Select from 'react-select'
import './ModalPlayer.css'

const ModalPlayer = (props) =>{
    // const options = [
    //     { value: '2', label: 'Seria A' },
    // ]
    const options = props.options;
    

    const [state, setState] = useState({})
    const [select, setSelect] = useState({})

    function handleChangeSelect(selectedOption){
        setSelect({selectedOption});
    }

    const { register , handleSubmit } = useForm();
    
    function handleChange(evt) {
        const value = evt.target.value;
        let inputName = evt.target.name;
        setState({
            id: (inputName === "id" ? value : state.id),
            firstName: (inputName === "firstName" ? value : state.firstName),
            lastName: (inputName === "lastName" ? value : state.lastName),
            age: (inputName === "age" ? value : state.age),
            playerNo: (inputName === "playerNo" ? value : state.playerNo),
            position: (inputName === "position" ? value : state.position),
            kit: (inputName === "kit" ? value : state.kit),
            price: (inputName === "price" ? value : state.price)
        });
    }

    const onSubmitLeague = async (data) =>{
        data.teamId = select.selectedOption.value;
        //console.log(data);
        try{
            if(data.id !== ""){
                await playersHttpRequestPut(data);
            }else{
                await playersHttpRequestPost(data);
            }
        }catch(err){
            console.log(err);
        }finally{
            window.location.reload();
        }
    }

    useEffect(()=>{
        setState(props.player);
    },[props.player]);

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
                    <form style={{width: "300px"}} onSubmit={handleSubmit(onSubmitLeague)} >
                    <input type="hidden" value={state.id != null ? state.id : ""} name="id" ref={register({required: false})} />
                        <div className="mb-3">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" name="firstName" value={state.firstName != null ? state.firstName : ""} onChange={handleChange} ref={register({required: true})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" name="lastName" value={state.lastName != null ? state.lastName : ""} onChange={handleChange} ref={register({required: true})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input type="number" className="form-control" name="age" value={state.age != null ? state.age : ""} onChange={handleChange} ref={register({required: true})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Player No</label>
                            <input type="number" className="form-control" name="playerNo" value={state.playerNo != null ? state.playerNo : ""} onChange={handleChange} ref={register({required: true})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Position</label>
                            <input type="text" className="form-control" name="position" value={state.position != null ? state.position : ""} onChange={handleChange} ref={register({required: true})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Kit</label>
                            <input type="text" className="form-control" name="kit" value={state.kit != null ? state.kit : ""} onChange={handleChange} ref={register({required: true})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" name="price" value={state.price != null ? state.price : ""} onChange={handleChange} ref={register({required: true})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Team</label>
                            <Select onChange={handleChangeSelect} options={options} />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModalPlayer;
