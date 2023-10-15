import ModuleList from "../Modules/ModuleList";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import React from "react";
import HomeModuleList from "./HomeModuleList";
import {PiNumberCircleOneBold} from "react-icons/pi";
import {BsFillBellFill, BsFillCalendarFill} from "react-icons/bs";
import {FaBan, FaFileImport} from "react-icons/fa";
import {CiImport} from "react-icons/ci";
import {IoAnalyticsOutline} from "react-icons/io5";
import {SiGoogleanalytics} from "react-icons/si";
import {GrAnnounce} from "react-icons/gr";
import {BiTargetLock} from "react-icons/bi";


function Home() {
    return (
        <div className="row">
            <div className="col col-xl-8 col-lg-12 col-md-10">
                <div className="float-end" style={{paddingTop: 10}}>
                    <button type="button" className="btn btn-secondary" style={{margin: 5}}>Collapse all</button>
                    <button type="button" className="btn btn-secondary">View Progress</button>
                    <select className="btn btn-secondary" style={{paddingTop: 10, margin: 5}}>
                        <option value="publishAll" style={{margin: 5}} selected>Publish All</option>
                    </select>
                    <button type="button" className="btn btn-danger"><AiOutlinePlus style={{color: "white"}}></AiOutlinePlus> Module</button>
                </div><br/><br/>
                <hr/><br/>
                <HomeModuleList />
            </div>
            <div className="col col-xl-4 d-none d-xl-block">
                <h2>Course Status</h2>
                <button type="button" className="btn btn-secondary" style={{margin: 5}}><FaBan style={{color: "white"}}></FaBan> Unpublished</button>
                <button type="button" className="btn btn-success" style={{margin: 5}}><AiOutlineCheckCircle style={{color: "white"}}></AiOutlineCheckCircle> Published</button><br/><br/>
                <ul className="list-group">
                    <li style={{marginBottom: 10}} className="list-group-item"><FaFileImport></FaFileImport> Import Existing Content</li>
                    <li style={{marginBottom: 10}} className="list-group-item"><CiImport></CiImport> Import From Commons</li>
                    <li style={{marginBottom: 10}} className="list-group-item"><BiTargetLock></BiTargetLock> Choose Home Page</li>
                    <li style={{marginBottom: 10}} className="list-group-item"><SiGoogleanalytics></SiGoogleanalytics> View Course Stream</li>
                    <li style={{marginBottom: 10}} className="list-group-item"><GrAnnounce></GrAnnounce> New Announcements</li>
                    <li style={{marginBottom: 10}} className="list-group-item"><IoAnalyticsOutline></IoAnalyticsOutline> New Analytics</li>
                    <li style={{marginBottom: 10}} className="list-group-item"><BsFillBellFill></BsFillBellFill> View Course Notification</li>
                </ul>
                <h2>To Do</h2><hr/>
                <a href="#" style={{color: "red", textDecoration: "none"}}><PiNumberCircleOneBold style={{color: "red"}}></PiNumberCircleOneBold> Assignment 1</a><br/><br/>
                <h2>Coming Up</h2><hr/>
                <a href="#" style={{color: "red", textDecoration: "none"}}><BsFillCalendarFill style={{color: "red"}}></BsFillCalendarFill> View Calendar</a>

            </div>
        </div>
    );
}
export default Home;