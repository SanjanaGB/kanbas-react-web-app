import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate, Link, useLocation} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigationSmall from "./KanbasNavigation/index-small";
import CourseNavigationSmall from "./Courses/CourseNavigation/index-small";
import {useState} from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    const {pathname} = useLocation();
    let path = pathname.split("/");
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
                                             name: "New Course",      number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                         });

    const addNewCourse = () => {
        setCourses([...courses,
                       { ...course,
                           _id: new Date().getTime().toString() }]);
    };

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
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
        <Provider store={store}>
        <div>
            {ifInCourse()}
            <div style={{alignItems: "center", width: "auto", overflow: "hidden",  paddingRight: 10}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={
                        <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>
                    } />
                    <Route path="Courses/:courseId/*" element={
                        <Courses courses={courses} />} />
                    <Route path="Courses/" />
                    <Route path="KanbasNavigationSmall/:courseId/*" element={<KanbasNavigationSmall />}/>
                    <Route path="CourseNavigationSmall/:courseId/*" element={<CourseNavigationSmall />}/>
                </Routes>
            </div>
        </div>
        </Provider>
    );
}
export default Kanbas;