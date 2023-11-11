import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {RxDotsVertical, RxDragHandleDots2} from "react-icons/rx";
import {BsFillClipboardFill} from "react-icons/bs";
import {AiFillCheckCircle} from "react-icons/ai";
import {findModulesForCourse} from "../Modules/client";
import {setModules} from "../Modules/modulesReducer";
import {useDispatch, useSelector} from "react-redux";


function HomeModuleList() {
    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <div className="row">
                                <div className="col" style={{textAlign: "left", paddingRight: 0, width: 30}}><RxDragHandleDots2/></div>
                                <div className="col col-10" style={{paddingLeft: 0}}><h5>{module.name}</h5></div>
                                <div className="col col-1" style={{textAlign: "right", width: 90}}><AiFillCheckCircle className="wd-icon" style={{color: "green"}}/><RxDotsVertical/></div>
                            </div>
                            <p>{module.description}</p>
                        </li>
                    ))
            }
        </ul>
    );
}
export default HomeModuleList;