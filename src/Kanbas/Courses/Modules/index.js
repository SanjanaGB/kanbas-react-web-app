import ModuleList from "./ModuleList";
import React from "react";
import {AiOutlinePlus} from "react-icons/ai";
function Modules() {
    return (
        <div className="col col-xl-8 col-lg-12 col-md-10">
            <div className="float-end" style={{paddingTop: 10}}>
                <button type="button" className="btn btn-secondary" style={{margin: 5}}>Collapse all</button>
                <button type="button" className="btn btn-secondary">View Progress</button>
                <select className="btn btn-secondary" style={{paddingTop: 10, margin: 5}}>
                    <option value="publishAll" style={{margin: 5}} selected>Publish All</option>
                </select>
                <button type="button" className="btn btn-danger"><AiOutlinePlus style={{color: "white"}}></AiOutlinePlus> Module</button>
            </div><br/><br/>
            <hr/><br/>
            <ModuleList />
        </div>
    );
}
export default Modules;