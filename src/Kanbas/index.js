import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";


function Kanbas() {
    return (
        <div>
            <div className="d-none d-md-block" style={{float: "left", width: 100}}>
            <KanbasNavigation />
            </div>
            <div style={{alignItems: "center", width: "auto", overflow: "hidden"}}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas;