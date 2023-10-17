import db from "../../Kanbas/Database";
import {Link, Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {FaBars} from "react-icons/fa";

function ifNotActiveCreateLink (index, path) {

}
function Courses() {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    let path = pathname.split("/");
    path = path.slice(4);
    const course = db.courses.find((course) => course._id === courseId);
    const getActiveClass = (index) => {
        return index === path.length - 1
               ? "active"
               : "fw-semibold text-danger";
    };

    const ifNotActiveCreateLink = (index, path) => {
        if(getActiveClass(index) !== "active") {
            return (<Link to={`/Kanbas/Courses/${courseId}/${path}`}
                          className="wd-link fw-semibold text-danger"
                          style={{textDecoration: "none"}}>
                <span className="fw-semibold">{path} </span>
            </Link>);
        } else {
            return (<span className="fw-semibold">{path} </span>);
        }
    };

    return (
        <div>
            <div className="d-none d-md-block">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item text-danger">
                            <FaBars className="me-2" style={{ fontSize: "1.5em" }} />
                            <Link
                                to={`/Kanbas/Courses/${courseId}`}
                                className="wd-link fw-semibold text-danger" style={{textDecoration: "none"}}>
                            <span className="fw-semibold">{course.name}.{course.number} </span>
                        </Link>
                    </li>
                    {path.map((path, index) => (
                        <li className={"breadcrumb-item" + getActiveClass(index)}
                            aria-current="page" >
                            <font style={{color: "red"}}> > </font>
                            {ifNotActiveCreateLink(index, path)}
                        </li>
                        ))}
                </ol>
                </nav>
                <hr/>
        </div>

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