import Nav from "../../Nav";
import {Navigate, Route, Routes} from "react-router-dom";
import UserTable from "./table";
import AccountNavigation from "./accountNavigation";
import AccountData from "./accountData";
import OtherAccountData from "./otherAccountData";

function Account() {
    return (

        <div>
            <div className="row">
                <div className="col-2">
                    <AccountNavigation/>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="AccountData" />} />
                        <Route path="AccountData" element={<AccountData/>} />
                        <Route path="Usertable" element={<UserTable/>} />
                        <Route path="OtherAccountData/:id" element={<OtherAccountData/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Account;