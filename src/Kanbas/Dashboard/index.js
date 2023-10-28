import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {
    return (
        <div>
            <h1>Dashboard</h1>
            <hr style={{paddingLeft: 20}}/>
            <h5>New Course Details</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            <div className="horizontal-center">
            <button className="btn btn-success" style={{textAlign: "center", margin: 5}} onClick={addNewCourse} >
                Add
            </button>
            <button className="btn btn-primary" style={{textAlign: "center", margin: 5}} onClick={updateCourse} >
                Update
            </button>
            </div>
            <br/>
            <h3>Published Courses</h3>
            <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
                    <div className="card m-3" style={{width: 250}}>
                        <div className="card-header bg-primary" style={{height: 140}}></div>
                            <div className="card-body">
                                <div className="text-secondary text-underline-hover">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">

                                        {course.name}
                                        <p className="card-text">{course._id}.11550.202410</p><br/>
                                        <button
                                            className="btn btn-warning"
                                            style={{textAlign: "center", margin: 5}}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}>
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger"
                                            style={{textAlign: "center", margin: 5}}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}>
                                            Delete
                                        </button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Dashboard;