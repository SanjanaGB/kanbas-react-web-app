import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Project/Account");
    };
    return (
        <div>
            <h1>Signin</h1>
            <input style={{margin: 5}}  className="form-control" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <input style={{margin: 5}}  className="form-control" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <button style={{margin: 5, textAlign: "center"}}  className="btn btn-primary" onClick={signin}> Signin </button>
        </div>
    );
}
export default Signin;