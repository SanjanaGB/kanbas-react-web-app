import React, { useState, useEffect } from "react";
import {BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill}

    from "react-icons/bs";
import * as client from "../Users/client";
import {Link} from "react-router-dom";
import {CiCircleCheck, CiCirclePlus} from "react-icons/ci";
function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", role: "USER" });

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const updateOtherUser = async () => {
        try {
            const status = await client.updateOtherUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const createUser = async () => {
        try {
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                <tr>
                    <td>
                        <input style={{margin: 5}}  className="form-control" value={user.password} placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                        <input style={{margin: 5}}  className="form-control" value={user.username} placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                    </td>
                    <td>
                        <input style={{margin: 5}}  className="form-control" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                    </td>
                    <td>
                        <input style={{margin: 5}}  className="form-control" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                    </td>
                    <td>
                        <select style={{margin: 5}} className="form-select" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </td>
                    <td>
                        <CiCircleCheck onClick={updateOtherUser}
                                               className="me-2 text-success fs-1 text" />
                    </td>
                    <td>
                        <CiCirclePlus onClick={createUser} className="me-2 text-success fs-1 text"/>
                    </td>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <Link to={`/Project/Account/OtherAccountData/${user._id}`}>
                            {user.username}
                        </Link>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td><button className="btn btn-warning me-2">
                            <BsPencil onClick={() => selectUser(user)} />
                        </button></td>
                        <td>
                            <button onClick={() => deleteUser(user)}>
                                <BsTrash3Fill />
                            </button>
                        </td>

                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;