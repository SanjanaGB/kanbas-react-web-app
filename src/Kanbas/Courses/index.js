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
        <div>
            <h1 style={{paddingLeft: 10}}>Course {course.name}</h1>
            <hr/>
                <div className="d-none d-md-block" style={{float: "left", width: 180}}>
                    <CourseNavigation />
                </div>
                <div style={{alignItems: "center", width: "auto", overflow: "hidden"}}>
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
    );
}


export default Courses;