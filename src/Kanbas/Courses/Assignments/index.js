import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsFillClipboardFill } from "react-icons/bs"
import {AiFillCheckCircle, AiOutlinePlus} from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import { PiDotsSixVertical} from "react-icons/pi";
import {RxDragHandleDots2} from "react-icons/rx";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <div className="col" style={{paddingRight: 50}}>
                <div className="row">
                    <div className="col">
                        <div className="w-25" style={{float: "left"}}>
                            <input className="form-control" id="text-field-search" placeholder="Search for Assignments"/>
                        </div>
                        <div className="float-end">

                            <button type="button" className="btn btn-secondary" style={{margin: 5}}><AiOutlinePlus style={{color: "white"}}></AiOutlinePlus> Group</button>

                            <button type="button" className="btn btn-danger" style={{margin: 5}}><AiOutlinePlus style={{color: "white"}}></AiOutlinePlus> Assignment</button>

                            <select className="btn btn-secondary" style={{width: 60, margin: 5}}>
                                <option selected>&#xf142;</option>
                                <option value="editAssignmentDates">Edit Assignment Dates</option>
                                <option value="assignmentsGroupWeight">Assignment Group Weight</option>
                                <option value="gradescope1.3">Gradescope 1.3</option>
                                <option value="commonsFavorites">Commons Favorites</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr/>
                <br/>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action list-group-item-secondary"><RxDragHandleDots2></RxDragHandleDots2> Assignments
                        <div className="float-end">
                            <div className="wd-rounded-corners-all-around wd-border-black wd-border-solid p-1" style={{float: "left"}}>40% of Total</div>
                            <div style={{float: "right"}} className="p-1">
                                <select className="btn btn-secondary" style={{width: 60}}>
                                    <option value="" selected>&#xf142;</option>
                                    <option value="edit">Edit</option>
                                    <option value="speedGrader">Speed Grader</option>
                                    <option value="duplicate">Duplicate</option>
                                    <option value="delete">Delete</option>
                                    <option value="moveTo">Move To</option>
                                    <option value="sendTo">Send To</option>
                                    <option value="copyTo">Copy To</option>
                                    <option value="shareToCommons">Share to Commons</option>
                                </select>
                            </div>
                        </div></li>
                    {courseAssignments.map((assignment) => (
                        <li className="list-group-item list-group-item-action"><RxDragHandleDots2></RxDragHandleDots2>
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                 style={{color:"black", textDecoration: "none"}} className="text-underline-hover">
                                <BsFillClipboardFill className="wd-icon" style={{color: "green"}}></BsFillClipboardFill>{assignment.title}
                            </Link>
                            <br/><Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="link-secondary text-underline-hover" style={{textDecoration: "none"}}>Multiple Modules </Link>| Not available yet<div className="float-end"> <AiFillCheckCircle className="wd-icon" style={{color: "green"}}></AiFillCheckCircle><BsThreeDotsVertical className="wd-icon" /></div></li>
                        ))}
                </ul>

                <br/>
            </div>
        </div>
    );
}
export default Assignments;

