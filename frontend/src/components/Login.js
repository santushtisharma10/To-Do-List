import React, { useState } from "react";

function Login() {

    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const handleSubmit = (e) => {

        e.preventDefault();

        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers : {

                "Content-Type" : "application/json"
            }, 
            body : JSON.stringify({

                user,
                pwd
            })

        }
        )
    }
    return (
        <div>
            <h3>Login Form</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="username" />
                <br />
                <input
                    type="password"
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="password" />
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Login