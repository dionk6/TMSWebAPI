import {useEffect,useState} from 'react';
import {useForm} from "react-hook-form";
import {AddStadium,SetStadium} from '../../../http/http-requests';

import './ModalStadiums.css'

const ModalStadiums = (props) =>{

    const [stadium, setStadium] = useState({});

    const { register , handleSubmit } = useForm();

    useEffect(()=>{
        setStadium(props.stadium);
    },[props.stadium]);

    function handleChange(evt) {
        const value = evt.target.value;
        let inputName = evt.target.name;
        setStadium({
            id: (inputName === "id" ? value : stadium.id),
            name: (inputName === "name" ? value : stadium.name),
            capacity: (inputName === "capacity" ? value : stadium.capacity),
            image: (stadium.image),
            rank: (inputName === "rank" ? value : stadium.rank),
            description: (inputName === "description" ? value : stadium.description)
        });
    }

    const onSubmitLeague = async (data) =>{
        data.image=data.image[0];
        console.log(data);
        let formData = new FormData();
        formData.append('id',data.id);
        formData.append('name',data.name);
        formData.append('image',data.image);
        formData.append('capacity',data.capacity);
        formData.append('rank',data.rank);
        formData.append('description',data.description);
        try{
            if(data.id !== ""){
                await SetStadium(formData);
            }else{
                await AddStadium(formData);
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
                    <form autoComplete="off" onSubmit={handleSubmit(onSubmitLeague)}>
                        <div className="col-12 d-flex justify-content-center mb-3">
                            {stadium.id !== undefined ? <img src={stadium.image} className="formImagePreview" alt={stadium.name} /> : "" }
                        </div>
                        <input type="hidden" value={stadium.id != null ? stadium.id : ""} onChange={handleChange} name="id" ref={register({required: false})} />
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" value={stadium.name != null ? stadium.name : ""} onChange={handleChange} className="form-control" name="name"  ref={register({required: true})}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Capacity</label>
                            <input type="number" value={stadium.capacity != null ? stadium.capacity : ""} onChange={handleChange} className="form-control" name="capacity" ref={register({required: true})} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input type="file"  className="form-control" onChange={handleChange} name="image" ref={register({required: false})}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rank</label>
                            <input type="number" value={stadium.rank != null ? stadium.rank : ""} onChange={handleChange} className="form-control" name="rank" ref={register({required: true})}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea rows="4" className="form-control" name="description" value={stadium.description != null ? stadium.description : ""} onChange={handleChange} ref={register({required: true})}></textarea>
                        </div>
                        {props.stadium.id != null ? <button type="submit" className="modalButton">Update</button> : <button type="submit" className="modalButton">Save</button> }
                    </form>
                </div>
            </div>
       </div>
    );
}

export default ModalStadiums;
