import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate, Link, useLocation} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import KanbasNavigationSmall from "./KanbasNavigation/index-small";
import CourseNavigationSmall from "./Courses/CourseNavigation/index-small";
import {useEffect, useState} from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
    const {pathname} = useLocation();
    let path = pathname.split("/");
    const [courses, setCourses] = useState([]);
    const URL = "https://kanbas-node-server-app-cwwu.onrender.com/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
                                             name: "New Course",      number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                         });

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });
    };


    const deleteCourse = async (courseId) => {
        const response = await axios.delete(
            `${URL}/${courseId}`
        );
        setCourses(courses.filter((c) => c._id !== courseId));
    };

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return response.data;
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