import React from "react";
import { Link, useParams } from "react-router-dom";
import {BsFillClipboardFill, BsPlusLg} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import {RxDragHandleDots2} from "react-icons/rx";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {deleteAssignment, setAssignment} from "./assignmentsReducer";

function Assignments() {
    const { courseId } = useParams();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const dispatch = useDispatch();
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    const newAssignment= { _id: "id", course: "course", title: "New Assignment", maxScore: "100", dueDate: "2023-03-15", availableFrom: "2023-01-10", availableUntil: "2023-05-15" };
    const getAssignmentId = (courseId) => {
        return "A" + courseId.toString() + (courseAssignments.length+1).toString()
    }

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

                            <Link
                                to={`/Kanbas/Courses/${courseId}/Assignments/${getAssignmentId(courseId)}`}
                                onClick={() => dispatch(setAssignment(newAssignment))}
                                style={{color:"black", textDecoration: "none"}} className="text-underline-hover">
                                <button type="button" className="btn btn-danger" style={{margin: 5}}><AiOutlinePlus style={{color: "white"}}></AiOutlinePlus> Assignment</button>
                            </Link>


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
                    <li className="list-group-item list-group-item-action list-group-item-secondary"><RxDragHandleDots2></RxDragHandleDots2> <font style={{bold: true}}>Assignments</font>
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
                        <li className="list-group-item list-group-item-action">
                            <div>
                            <div style={{float: "left"}}>
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                onClick={() => dispatch(setAssignment(assignment))}
                                 style={{color:"black", textDecoration: "none"}} className="text-underline-hover">
                                <RxDragHandleDots2></RxDragHandleDots2><BsFillClipboardFill className="wd-icon" style={{color: "green"}}></BsFillClipboardFill>{assignment.title}
                            </Link>
                            <br/><Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="link-secondary text-underline-hover" style={{textDecoration: "none"}}>Multiple Modules </Link><font style={{color: "grey"}}>| Due Date {assignment.dueDate} | Points {assignment.maxScore}</font>
                        </div>
                        <div style={{float: "right"}}>
                        <button
                            className="btn btn-danger"
                            style={{margin: 5}}
                            onClick={() => dispatch(deleteAssignment(assignment._id))}>
                            Delete
                        </button>
                    </div>
                    </div>
                        </li>
                        ))}

                </ul>

                <br/>
            </div>
        </div>
    );
}
export default Assignments;

