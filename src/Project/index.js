import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import Account from "./Account/index";
import Signin from "./Users/signin";
import ProjectNavigation from "./ProjectNavigation";
import Signup from "./Users/signup";
function Project() {
    return (
        <div>
            <div className="row">
                <Nav />
            </div>
            <div className="row">
                <div className="col-2">
                    <ProjectNavigation/>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="Signin" />} />
                        <Route path="Signin" element={<Signin/>} />
                        <Route path="Signup" element={<Signup/>} />
                        <Route path="Account/*" element={<Account/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Project;