import React, {useState} from "react";
import './LoginStyles.css'
import NavigationHeader from "../NavigationHeader";
import {Link} from "react-router-dom";
import LoginService from "../../api/LoginService";

function Login() {

    const [userName, setUsername] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function loginSubmit() {
        LoginService(userName, userPassword)
            .then((response) => {
                console.log(response.data)
            })
            .catch((response) => {
                console.log(response.status)
            })
    }

    return (
        <div id="main-container">
            <NavigationHeader/>
            <form id="login-card">
                <label className="login-labels">
                    Username:
                    <input className="login-inputs" type="text" name="username" placeholder="Username"
                           onChange={(event) => setUsername(event.target.value)}/>
                </label>
                <label className="login-labels">
                    Password:
                    <input className="login-inputs" type="password" name="password" placeholder="Password"
                           onChange={(event) => setUserPassword(event.target.value)}/>
                </label>
                <label className="login-labels">
                    <input id="login-button" type="button" name="login-btn" value="Login" onClick={loginSubmit}/>
                </label>
                <div className="login-footer">
                    <Link to="/forgot-password" className="navigation-links">Forgot Password</Link>
                    <Link to="/register" className="navigation-links">Register</Link>
                </div>
            </form>

        </div>
    );
}

export default Login;