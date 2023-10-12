import db from "../../Database";
import { useParams } from "react-router-dom";
import {BiImport} from "react-icons/bi";
import {IoSettingsSharp} from "react-icons/io5";
import {FaFilter} from "react-icons/fa";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="float-end">

                <button type="button" className="btn btn-secondary" style={{height: 40}}><BiImport></BiImport> Import</button>

                <select className="btn btn-secondary" style={{height: 40}}>
                    <option value="export" selected>&#xf56e; Export</option>
                </select>

                <button type="button" className="btn btn-secondary" style={{height: 40}}><IoSettingsSharp></IoSettingsSharp></button>
            </div>
            <br/>
            <br/>

            <div>
                <div className="row">
                    <div className="col"><h5>Students Names</h5></div>
                    <div className="col"><h5>Assignment Names</h5></div>
                </div>
                <div className="row">
                    <div className="col"><input className="form-control" id="text-field-search-students" placeholder="&#xf002; Search Students"/></div>
                    <div className="col"><input className="form-control" id="text-field-search-assignments" placeholder="&#xf002; Search Assignments"/><br/><br/></div>
                </div>
            </div>
            <button type="button" className="btn btn-secondary"><FaFilter></FaFilter> Apply Filters</button><br/><br/>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                        <th style={{textAlign: "center"}}>Student Name</th>
                        {assignments.map((assignment) => (<th style={{textAlign: "center"}}>{assignment.title}</th>))}
                        </tr>
                        </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td style={{textAlign: "center", color: "red"}}>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    if(enrollment.user === "123" && assignment._id === "A103" || enrollment.user === "121" && assignment._id === "A101") {
                                        return (<td style={{textAlign: "center"}}><input type="text" value={grade?.grade || ""} style={{textAlign: "center"}}/></td>);
                                    }
                                    return (<td style={{textAlign: "center"}}>{grade?.grade || ""}</td>);})}
                            </tr>);
                    })}
                    </tbody></table>
            </div></div>);
}
export default Grades;