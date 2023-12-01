import * as client from "../Users/client";
import { useState, useEffect } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

function AccountData() {
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

    const save = async () => {
        await client.updateUser(account);
    };

    return (
        <div className="w-50">
            {useEffect}
            <div className="row" style={{textAlign: "center"}}>
            <h1>Account</h1>
            </div>
            {account && (
                <div>
                    <input style={{margin: 5}} className="form-control" placeholder="Username" value={account.username}
                           onChange={(e) => setAccount({ ...account,
                                                           username: e.target.value })}/>
                    <input style={{margin: 5}} className="form-control" placeholder="Password" value={account.password}
                           onChange={(e) => setAccount({ ...account,
                                                           password: e.target.value })}/>
                    <input style={{margin: 5}} className="form-control" placeholder="First Name" value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                                                           firstName: e.target.value })}/>
                    <input style={{margin: 5}} className="form-control" placeholder="Last Name" value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                                                           lastName: e.target.value })}/>
                    <input style={{margin: 5}} className="form-control" placeholder="DOB" value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                                                           dob: e.target.value })}/>
                    <input style={{margin: 5}} className="form-control" placeholder="Email" value={account.email}
                           onChange={(e) => setAccount({ ...account,
                                                           email: e.target.value })}/>
                    <select style={{margin: 5}} className="form-select" onChange={(e) => setAccount({ ...account,
                                                            role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button style={{margin: 5}} className="btn btn-primary" onClick={save}>
                        Save
                    </button>
                    <button style={{margin: 5, textAlign: "center"}} className="btn btn-danger" onClick={signout}>
                        Sign-out
                    </button>
                </div>
            )}
        </div>
    );
}
export default AccountData;

