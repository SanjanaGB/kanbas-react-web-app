import db from "../../Kanbas/Database";
import {Link, Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {FaBars} from "react-icons/fa";
import {BiGlasses, BiSolidDownArrow} from "react-icons/bi";


function Courses({ courses }) {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    let path = pathname.split("/");
    path = path.slice(4);
    console.log(courses);
    const course = courses.find((course) => course._id === courseId);
    console.log(course);
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
            return (<span className="fw-semibold" style={{color: "gray"}}>{path} </span>);
        }
    };

    const isHomeOrModulPage = () => {
        if(path[0] === "Home" || path[0] === "Modules") {
            return(
                <button type="button" className="btn btn-secondary float-end"><BiGlasses style={{color: "white"}}/> Student View</button>
            );
        }
    };



    return (
        <div>
            <div className="d-none d-md-block">
                <div className="row">
                    <div className="col col-8">
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
                    </div>
                    <div className="col col-4" style={{paddingTop: 10}}>
                    {isHomeOrModulPage()}
                    </div>
                </div>
                <hr/>
        </div>
            <div className="d-none d-md-block" style={{float: "left", width: 180}}>
                    <CourseNavigation />
            </div>
            <div className="row d-md-none" style={{backgroundColor: "black", height: 80}}>
                    <div className="col-sm-1">
                        <Link to={`/Kanbas/KanbasNavigationSmall/${courseId}`}
                              className="wd-link fw-semibold text-danger"
                              style={{textDecoration: "none"}}>
                            <span className="fw-semibold"> <FaBars className="wd-icon" style={{color: "red", height: 30}}/></span>
                        </Link>
                    </div>
                <div className="col-sm-10" style={{paddingLeft: 100}}>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item text-danger">
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
                </div>
                <div className="col-sm-1">
                    <Link to={`/Kanbas/CourseNavigationSmall/${courseId}`}
                          className="wd-link fw-semibold text-danger"
                          style={{textDecoration: "none"}}>
                        <span className="fw-semibold"> <BiSolidDownArrow className="wd-icon" style={{color: "red", height: 30}}/></span>
                    </Link>
                </div>
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