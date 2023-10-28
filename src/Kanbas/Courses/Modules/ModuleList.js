import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <div>
                        <div style={{float: "left"}}>
                            <input className="form-control"  style={{margin: 5}} value={module.name}
                                   onChange={(e) =>
                                       dispatch(setModule({ ...module, name: e.target.value }))
                                   }
                            />
                            <textarea className="form-control"  style={{margin: 5}} value={module.description}
                                      onChange={(e) =>
                                          dispatch(setModule({ ...module, description: e.target.value }))
                                      }
                            />
                        </div>

                    <div style={{float: "right"}}>
                    <button style={{margin: 5}} className="btn btn-primary" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                    <button style={{margin: 5}} className="btn btn-danger" onClick={() => dispatch(updateModule(module))}>Update</button>
                    </div>
                </div>
                    <br/><br/>
            </li>
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <div>
                            <div style={{float: "left", paddingLeft: 0, width: "auto"}}>
                                <h5>{module.name}</h5>
                                <p>{module.description}</p>
                            </div>
                            <div style={{float: "right", textAlign: "right"}}>
                                <button
                                    className="btn btn-warning"
                                    style={{margin: 5}}
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    style={{margin: 5}}
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>
                            </div>
                            </div>
                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;
