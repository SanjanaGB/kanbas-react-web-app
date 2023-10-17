import {Link, useLocation, useParams} from "react-router-dom";
import "./index-small.css"
import {BiHelpCircle, BiSolidUser, BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook, FaPlane, FaUsers} from "react-icons/fa";
import {
    BsCameraVideoFill, BsCircle, BsClipboardCheck,
    BsClockHistory, BsFillBookFill,
    BsFillCalendar2WeekFill, BsFillCameraVideoFill, BsFillClipboardFill, BsFillGearFill,
    BsFillInboxFill, BsPlugFill, BsTable
} from "react-icons/bs";
import {LiaFileExportSolid} from "react-icons/lia";
import {AiFillHome, AiOutlineFile} from "react-icons/ai";
import {TfiAnnouncement} from "react-icons/tfi";

function CourseNavigationSmall() {
    const links = ["Home", "Modules", "Piazza", "ZoomMeeting", "Assignments", "Quizzes", "Grades", "People",
                   "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();

    const linkToIconMap = {
        Home: <AiFillHome className="wd-icon" style={{color: "red"}}/>,
        Modules: <BsFillBookFill className="wd-icon" style={{color: "red"}}/>,
        Piazza: <BsPlugFill className="wd-icon" style={{color: "red"}}/>,
        ZoomMeeting: <BsPlugFill className="wd-icon" style={{color: "red"}}/>,
        Assignments: <BsFillClipboardFill className="wd-icon" style={{color: "red"}}/>,
        Quizzes: <FaPlane className="wd-icon" style={{color: "red"}}/>,
        Grades: <BsTable className="wd-icon" style={{color: "red"}}/>,
        People: <BiSolidUser className="wd-icon" style={{color: "red"}}/>,
        PanoptoVideo: <BsFillCameraVideoFill className="wd-icon" style={{color: "red"}}/>,
        Discussions: <FaUsers className="wd-icon" style={{color: "red"}}/>,
        Announcements: <TfiAnnouncement className="wd-icon" style={{color: "red"}}/>,
        Pages: <AiOutlineFile className="wd-icon" style={{color: "red"}}/>,
        Files: <AiOutlineFile className="wd-icon" style={{color: "red"}}/>,
        Rubrics: <BsClipboardCheck className="wd-icon" style={{color: "red"}}/>,
        Outcomes: <BsCircle className="wd-icon" style={{color: "red"}}/>,
        Collaborations: <FaUsers className="wd-icon" style={{color: "red"}}/>,
        Syllabus: <BsFillBookFill className="wd-icon" style={{color: "red"}}/>,
        Settings: <BsFillGearFill className="wd-icon" style={{color: "red"}}/>
    };

    return(
        <div className="row">
            <div className="col wd-course-navigation-column d-md-none">
                <div className="wd-course list-group">
                        <div className="wd-course-navigation list-group" style={{ width: 150}}>
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    to={`/Kanbas/Courses/${courseId}/${link}`}
                                    className={`${pathname.includes(link) && "active"}`}
                                    style={{color: "red"}}
                                >{linkToIconMap[link]} {link}
                                </Link>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default CourseNavigationSmall;