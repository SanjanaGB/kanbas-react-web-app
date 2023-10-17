import "./index-small.css"
import {BiHelpCircle, BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";
import {
    BsCameraVideoFill,
    BsClockHistory,
    BsFillCalendar2WeekFill,
    BsFillInboxFill
} from "react-icons/bs";
import {LiaFileExportSolid} from "react-icons/lia";
import {Link, useLocation} from "react-router-dom";
function KanbasNavigationSmall() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon" style={{color: "red"}}/>,
        Dashboard: <RiDashboard3Fill className="wd-icon" style={{color: "red"}}/>,
        Courses: <FaBook className="wd-icon" style={{color: "red"}}/>,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" style={{color: "red"}}/>,
        Inbox: <BsFillInboxFill className="wd-icon" style={{color: "red"}}/>,
        History: <BsClockHistory className="wd-icon" style={{color: "red"}}/>,
        Studio: <BsCameraVideoFill className="wd-icon" style={{color: "red"}}/>,
        Commons: <LiaFileExportSolid className="wd-icon" style={{color: "red"}}/>,
        Help: <BiHelpCircle className="wd-icon" style={{color: "red"}}/>,
    };

    const { pathname } = useLocation();
    return(
        <div className="row">
            <div className="col wd-kanbas-navigation-column d-md-none" style={{backgroundColor: "white" }}>
                <div className="wd-kanbas list-group wd-kanbas-navigation-fix" style={{backgroundColor: "white", borderColor: "white"}}>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={`/Kanbas/${link}`}
                            className={`list-group-item ${pathname.includes(link) && "active"}`}
                        >
                            {linkToIconMap[link]}
                            <br/>
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KanbasNavigationSmall;