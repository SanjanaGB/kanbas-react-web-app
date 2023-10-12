import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div style={{paddingLeft: 110, width: 1450}}>
            <h1 style={{paddingLeft: 10}}>Course {course.name}</h1>
            <hr/>
            <div className="row">
                <div className="col col-3">
                    <CourseNavigation />
                </div>
                <div className="col col-9" style={{alignItems: "center"}}>
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<Modules/>} />
                            <Route path="Assignments" element={<Assignments/>} />
                            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </div>
            </div>
        </div>
    );
}


export default Courses;