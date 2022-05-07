import React from "react";
import Logo from "./images/Logo.png"
import { Link } from "react-router-dom";

function Login () {
    return (
        <div>
            <div>
                <img src={Logo} alt={"Logo"} width={120}></img>
            </div>
            <form>
                <h1>Login</h1>
                    <hr className=""/>
                        <div>
                            <h2>Username</h2>
                            <input type={"text"} placeholder={"Username"} />
                        </div>
                        <div>
                        <h2>Password</h2>
                            <input type={"password"} placeholder={"Password"} />
                        </div>
                        <Link to="/register">Register</Link>
            </form>
        </div>
    );
}

export default Login; 