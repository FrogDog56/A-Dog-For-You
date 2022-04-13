import React from "react";
import { Link } from "react-router-dom";

function Login () {
    return (
        <div>
            <form>
                <h1>Login</h1>
                    <hr />
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