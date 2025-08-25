import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
const SignUp = ({}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    // useEffect(() => {
    //     if (localStorage.getItem("token")) {
    //         navigate("/");
    //     }
    // }, [])

    useEffect(() => {
        if (localStorage.getItem("AUTH_API")) { // use same key
            navigate("/");
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            mode: "cors",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: email, password: password })

        }

        var response = await fetch('http://localhost:3000/signup', requestOptions);
        console.log(response);
        var data = await response.json();

        if (data.err) {
            alert(data.message || "Something went wrong!")
        }

        else if (data.token) {
            // document.cookie = `AUTH_API=${data.token}`;
            localStorage.setItem("AUTH_API", data.token);
            navigate("/");

        }

    }

    return (
        <div className='container mt-3'>
            <h2>Sign Up to Start your Journey</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/signup" className='m-3 btn btn-danger'>I am a new user</Link>
            </form>
        </div>
    )

}
export default SignUp;

