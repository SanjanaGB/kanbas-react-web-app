import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
function Dashboard() {
    const courses = db.courses;
    return (
        <div style={{paddingLeft: 110, width: 1350}}>
            <h1>Dashboard</h1>
            <hr style={{paddingLeft: 20}}/>
            <h3>Published Courses</h3>
            <div className="d-flex flex-row flex-wrap">
                {courses.map((course) => (
                    <div className="card m-3" style={{width: 250}}>
                        <div className="card-header bg-primary" style={{height: 140}}></div>
                            <div className="card-body">
                                <div className="text-secondary text-underline-hover">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                                        {course.name}
                                        <p className="card-text">{course._id}.11550.202410</p>
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