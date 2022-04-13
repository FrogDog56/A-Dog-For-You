import React from "react";

function Register () {
    return (
        <div>
            <form>
                <h1>Register</h1>
                    <hr />
                        <div>
                            <h2>Username</h2>
                            <input type={"text"} placeholder={"Username"} />
                        </div>
                        <div>
                        <h2>Password</h2>
                            <input type={"password"} placeholder={"Password"} />
                        </div>
                        <div>
                        <h2>Repeat Password</h2>
                            <input type={"password"} placeholder={"Repeat Password"} />
                        </div>
            </form>
        </div>
    );
}

export default Register; 