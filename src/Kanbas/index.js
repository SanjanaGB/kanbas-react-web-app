import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate, Link} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigationSmall from "./KanbasNavigation/index-small";
import {FaBars} from "react-icons/fa";
import CourseNavigationSmall from "./Courses/CourseNavigation/index-small";
import {BiSolidDownArrow} from "react-icons/bi";


function Kanbas() {
    return (
        <div>
            <div className="d-none d-md-block" style={{float: "left", width: 100}}>
            <KanbasNavigation />
            </div>
            <div className="row d-md-none" style={{backgroundColor: "black", height: 30}}>
                <div className="col-sm-1">
                    <Link to={`/Kanbas/KanbasNavigationSmall`}
                          className="wd-link fw-semibold text-danger"
                          style={{textDecoration: "none"}}>
                        <span className="fw-semibold"> <FaBars className="wd-icon" style={{color: "red", height: 30}}/></span>
                    </Link>
                </div>
            </div>
            <div style={{alignItems: "center", width: "auto", overflow: "hidden",  paddingRight: 10}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    <Route path="Courses/" element={<Dashboard />} />
                    <Route path="KanbasNavigationSmall" element={<KanbasNavigationSmall />}/>
                    <Route path="CourseNavigationSmall/:courseId/*" element={<CourseNavigationSmall />}/>
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas;