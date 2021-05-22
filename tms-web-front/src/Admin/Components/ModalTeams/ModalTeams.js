import './ModalTeams.css'

const ModalTeams = (props) =>{
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
                    <form style={{width: "300px"}}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" name="city" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Logo</label>
                            <input type="number" className="form-control" name="logo" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Founded Year</label>
                            <input type="number" className="form-control" name="foundedYear" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Manager</label>
                            <input type="text" className="form-control" name="manager" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Trophies</label>
                            <input type="number" className="form-control" name="trophies" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Owner</label>
                            <input type="text" className="form-control" name="owner" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Budget</label>
                            <input type="number" className="form-control" name="budget" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">League</label>
                            <input type="text" className="form-control" name="league" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Stadium</label>
                            <input type="text" className="form-control" name="stadium" />
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
       </div>
    );
}

export default ModalTeams;
