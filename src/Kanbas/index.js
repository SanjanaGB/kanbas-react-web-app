import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate, Link, useLocation} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigationSmall from "./KanbasNavigation/index-small";
import {FaBars} from "react-icons/fa";
import CourseNavigationSmall from "./Courses/CourseNavigation/index-small";
import {BiSolidDownArrow} from "react-icons/bi";


function Kanbas() {
    const {pathname} = useLocation();
    let path = pathname.split("/");
    const ifInCourse = () => {
        if(path[2] === "Courses" || path[2] === "CourseNavigationSmall" || path[2] === "KanbasNavigationSmall") {
            return(
                <div className="d-none d-md-block" style={{float: "left", width: 100}}>
                    <KanbasNavigation />
                </div>
            );
        } else {
            return(
                <div style={{float: "left", width: 100}}>
                    <KanbasNavigation />
                </div>
            );
        }
    };
    return (
        <div>
            {ifInCourse()}
            <div style={{alignItems: "center", width: "auto", overflow: "hidden",  paddingRight: 10}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    <Route path="Courses/" element={<Dashboard />} />
                    <Route path="KanbasNavigationSmall/:courseId/*" element={<KanbasNavigationSmall />}/>
                    <Route path="CourseNavigationSmall/:courseId/*" element={<CourseNavigationSmall />}/>
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas;