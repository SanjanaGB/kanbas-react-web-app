import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule, setModules,
} from "./modulesReducer";
import {findModulesForCourse, createModule, removeModule, changeModule} from "./client";

function ModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        removeModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await changeModule(module);
        dispatch(updateModule(module));
    };




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
                    <button style={{margin: 5}} className="btn btn-primary" onClick={handleAddModule}>Add</button>
                    <button style={{margin: 5}} className="btn btn-danger" onClick={handleUpdateModule}>Update</button>
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
                                    onClick={() => handleDeleteModule(module._id)}>
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
