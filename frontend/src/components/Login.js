import React, { useState, useHistory } from "react";

function Login() {

    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [error, setError] = useState("")

    const history = useHistory()

    const handleError = async(response) => {

        setError("")

        if(!response.ok) {

            const {message} = await response.json();
            console.log(message)
            throw Error(message)
        }

        return response.json();
    }
    

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
        .then(handleError)
        .catch((err)=>{

            console.log("ERROR", err)
            setError(err.message)
        })
    }
    return (
        <div>
            <h3>Login Form</h3>
            {error.length  > 0 && <h2>{error}</h2>}
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