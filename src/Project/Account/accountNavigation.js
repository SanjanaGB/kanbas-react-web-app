import {Link, useLocation} from "react-router-dom";
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

function AccountNavigation() {
    const links = ["AccountData", "Usertable"];

    const linkToNameMap = {
        AccountData: "MyAccount",
        Usertable: "Get All Users",
    };

    const { pathname } = useLocation();
    return (
        <div style={{ width: 100}}>
            {links.map((link, index) => (
                <Link
                key={index}
            to={`/Project/Account/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            <br/>
            {linkToNameMap[link]}
        </Link>
            ))}
        </div>
    );
}

export default AccountNavigation;