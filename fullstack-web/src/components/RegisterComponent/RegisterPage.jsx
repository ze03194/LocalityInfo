import React from "react";
import './RegisterPageStyles.css'
import NavigationHeader from "../NavigationHeader";
import RegisterService from "../../api/RegisterService";
import {useNavigate} from "react-router-dom";

function RegisterPage() {

    let navigate = useNavigate();

    let user = {
        userName: '',
        password: '',
        firstName: '',
        email: '',
        zipCode: ''
    }

    function registerSubmit() {
        RegisterService(user)
            .then((response) => {
                // console.log(response.status)
                if (response.status === 200) {
                    navigate("/login")
                }
            })
            .catch((response) => {
                console.log(response.status)
            })
        // console.log(user)
    }

    return (
        <div id="main-container">
            <NavigationHeader/>
            <form action="#" className="register-card">
                <div id="labels-inputs-container">
                    <label className="register-labels">
                        First Name:
                        <input type="text" className="register-inputs" onChange={(event) => {
                            user.firstName = event.target.value
                        }}/>
                    </label>
                    <label className="register-labels">
                        Username:
                        <input type="text" className="register-inputs" onChange={(event) => {
                            user.userName = event.target.value
                        }}/>
                    </label>
                    <label className="register-labels">
                        Email:
                        <input type="text" className="register-inputs" onChange={(event) => {
                            user.email = event.target.value
                        }}/>
                    </label>
                    <label className="register-labels">
                        Password:
                        <input type="password" className="register-inputs" onChange={(event) => {
                            user.password = event.target.value
                        }}/>
                    </label>
                    <label className="register-labels">
                        Zipcode:
                        <input type="text" className="register-inputs" onChange={(event) => {
                            user.zipCode = event.target.value
                        }}/>
                    </label>
                    <label className="register-labels">
                        <input type="button" id="register-button" name="register-btn" value="Register"
                               onClick={registerSubmit}/>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;