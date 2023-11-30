import * as client from "../Users/client";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

function OtherAccountData() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };

    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        console.log("Account",account);
        setAccount(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Project/Signin");
    };

    useEffect(() => {
        if (id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    }, []);

    const update = async () => {
        await client.updateOtherUser(account);
    };

    return (
        <div className="w-50">
            <div className="row" style={{textAlign: "center"}}>
                <h1>Account</h1>
            </div>
            {account && (
                <div>
                    <input value={account.username}
                           onChange={(e) => setAccount({ ...account,
                                                           username: e.target.value })}/>
                    <input value={account.password}
                           onChange={(e) => setAccount({ ...account,
                                                           password: e.target.value })}/>
                    <input value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                                                           firstName: e.target.value })}/>
                    <input value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                                                           lastName: e.target.value })}/>
                    <input value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                                                           dob: e.target.value })}/>
                    <input value={account.email}
                           onChange={(e) => setAccount({ ...account,
                                                           email: e.target.value })}/>
                    <select onChange={(e) => setAccount({ ...account,
                                                            role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button onClick={update}>
                        Update
                    </button>
                </div>
            )}
        </div>
    );
}
export default OtherAccountData;

