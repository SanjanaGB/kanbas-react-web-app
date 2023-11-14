import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {AiFillCheckSquare, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addModule, setModule, updateModule} from "../../Modules/modulesReducer";
import {saveAssignment, setAssignment, updateAssignment} from "../assignmentsReducer";
import {createModule} from "../../Modules/client";
import {createAssignment, updateOrCreateAssignment} from "../client";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log(assignment);
        updateOrCreateAssignment(courseId, assignment).then((assignment) => {
            dispatch(saveAssignment(assignment));
        });
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="col" style={{paddingRight: 50}}>
            <div className="float-end">
                <AiFillCheckSquare style={{color: "green"}}></AiFillCheckSquare> <font color="green">Published</font>
                <select className="btn btn-secondary" style={{margin: 5}}>
                    <option value="speedGrader" selected>&#xf142;</option>
                </select>
            </div><br/><br/>

            <hr/>

                <h4>Assignment Name</h4>
                <input value={assignment.title} id="text-fields-assignmentName" className="form-control mb-2"
                       onChange={(e) =>
                           dispatch(setAssignment({ ...assignment, title: e.target.value }))
                       }
                /><br/><br/>

                <textarea className="form-control" cols="20"
                          rows="2"
                          title="tooltip"
                          onChange={(e) =>
                              dispatch(setAssignment({ ...assignment, description: e.target.value }))
                          }>{assignment.title}
                        </textarea>

                <div className="p-lg-5">
                    <div className="p-lg-4">
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Points
                            </div>
                            <div className="col col-9">
                                <input className="form-control" type="number"
                                       id="text-field-point"
                                       placeholder="100"
                                       value={assignment.maxScore}
                                       onChange={(e) =>
                                           dispatch(setAssignment({ ...assignment, maxScore: e.target.value }))
                                       }/><br/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Assignment Group
                            </div>
                            <div className="col col-9">
                                <select className="form-select">
                                    <option value="assignments" selected>ASSIGNMENTS</option>
                                    <option value="quizzes">QUIZZES</option>
                                    <option value="exams">EXAMS</option>
                                    <option value="project">PROJECT</option>
                                </select><br/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Display Grade as
                            </div>
                            <div className="col col-9">
                                <select className="form-select">
                                    <option value="percentage" selected>Percentage</option>
                                </select><br/>
                                <input className="form-check-input" type="checkbox" value="peerReviews"
                                       name="check-peer-review" id="chkbox-count-grade"/>
                                <label className="form-check-label" htmlFor="chkbox-count-grade">Do not count this assignment towards final grade</label><br/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Submission Type<br/>
                            </div>
                            <div className="col col-9 border p-3">
                                <select className="form-select">
                                    <option value="online" selected>Online</option>
                                </select><br/>
                                <div className="form-check">
                                    <h6 style={{textAlign: "left"}}>Online Entry Option</h6>
                                    <input className="form-check-input" type="checkbox" value="textEntry"
                                           name="check-online-entry-option" id="chkbox-text-entry" checked/>
                                    <label htmlFor="chkbox-text-entry">Text Entry</label>    <br/>
                                    <input className="form-check-input" type="checkbox" value="websiteURL"
                                           name="check-online-entry-option" id="chkbox-website-url"/>
                                    <label htmlFor="chkbox-website-url">Website URL</label>    <br/>
                                    <input className="form-check-input" type="checkbox" value="mediaRecordings"
                                           name="check-online-entry-option" id="chkbox-media-recordings" checked/>
                                    <label htmlFor="chkbox-media-recordings">Media Recordings</label> <br/>
                                    <input className="form-check-input" type="checkbox" value="studentAnnotation"
                                           name="check-online-entry-option" id="chkbox-student-annotation"/>
                                    <label htmlFor="chkbox-student-annotation">Student Annotation</label> <br/>
                                    <input className="form-check-input" type="checkbox" value="fileUploads"
                                           name="check-online-entry-option" id="chkbox-file-uploads"/>
                                    <label htmlFor="chkbox-file-uploads">File Uploads</label>
                                </div>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Submission Attempts
                            </div>
                            <div className="col col-9">
                                <select className="form-select">
                                    <option value="unlimited" selected>Unlimited</option>
                                </select><br/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Plagarism Review
                            </div>
                            <div className="col col-9">
                                <select className="form-select">
                                    <option value="none" selected>None</option>
                                </select><br/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Group Assignment
                            </div>
                            <div className="col col-9">
                                <input className="form-check-input" type="checkbox" value="groupAssignment"
                                       name="check-group-assignment" id="chkbox-group-assignment"/>
                                <label className="form-check-label" htmlFor="chkbox-group-assignment">This is a Group Assignment</label>
                            </div><br/><br/>
                        </div>
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Peer Reviews
                            </div>
                            <div className="col col-9">
                                <input className="form-check-input" type="checkbox" value="peerReviews"
                                       name="check-peer-review" id="chkbox-peer-review"/>
                                <label className="form-check-label" htmlFor="chkbox-peer-review">Text Entry</label><br/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3" style={{textAlign: "right"}}>
                                Assign
                            </div>
                            <div className="col col-9 border p-2">
                                <label htmlFor="text-fields-assignTo">
                                    AssignTo
                                </label><br/>
                                <input className="form-control" id="text-fields-assignTo" value="Everyone"/><br/>
                                <label htmlFor="text-fields-due">
                                    Due
                                </label><br/>
                                <input className="form-control" type="date"
                                       id="text-fields-due"
                                       value={assignment.dueDate}
                                       onChange={(e) =>
                                           dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                                       }
                                /><br/>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="text-fields-from">
                                            Available From
                                        </label><br/>
                                        <input className="form-control" type="date"
                                               id="text-fields-from"
                                               value={assignment.availableFrom}
                                               onChange={(e) =>
                                                   dispatch(setAssignment({ ...assignment, availableFrom: e.target.value }))
                                               }
                                        /><br/>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="text-fields-to">
                                            Until
                                        </label><br/>
                                        <input className="form-control" type="date"
                                               id="text-fields-to"
                                               value={assignment.availableUntil}
                                               onChange={(e) =>
                                                   dispatch(setAssignment({ ...assignment, availableUntil: e.target.value }))
                                               }
                                        />
                                    </div>
                                </div>
                                <button type="button" className="btn btn-secondary" style={{width: 100}}><AiOutlinePlus style={{color: "white"}}></AiOutlinePlus> Add</button>

                            </div>
                        </div>
                    </div>
                </div>
                <hr/><br/>
                    <input className="form-check-input" type="checkbox" value="peerReviews"
                           name="check-peer-review" id="chkbox-notify-users"/>
                    <label className="form-check-label" htmlFor="chkbox-notify-users">Notify users that content has changed</label>
                    <div style={{textAlign: "right", padding: 5, margin: 5}}>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                              className="btn btn-danger">
                            Cancel
                        </Link>
                        <button onClick={handleSave} className="btn btn-success me-2" style={{margin: 5}}>
                            Save
                        </button>
                    </div>
        </div>
    );
}


export default AssignmentEditor;