import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {RxDotsVertical, RxDragHandleDots2} from "react-icons/rx";
import {AiFillCheckCircle} from "react-icons/ai";


function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <ul className="list-group">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <div>
                            <div style={{float: "left", textAlign: "left", paddingRight: 0, width: 40}}><RxDragHandleDots2/></div>
                            <div style={{paddingLeft: 0, width: "auto"}}><h5>{module.name}</h5></div>
                            <div style={{float: "right", textAlign: "right", width: 60}}><AiFillCheckCircle className="wd-icon" style={{color: "green"}}/><RxDotsVertical/></div>
                            </div>
                            <p>{module.description}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;
