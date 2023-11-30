import {Link, useLocation} from "react-router-dom";

function ProjectNavigation() {
    const links = ["Signin", "Signup"];


    const { pathname } = useLocation();
    return (
        <div style={{ width: 100}}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Project/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}
                >
                    <br/>
                    {link}
                </Link>
            ))}
        </div>
    );
}

export default ProjectNavigation;