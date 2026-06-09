import { useEffect, useState } from "react";

export function Login() {

    useEffect(() => {

        console.log("Login Mounted");

        return () => {
            console.log("Login Unmounted");
        }

    }, []);

    return (
        <div>
            <h3>Login</h3>
        </div>
    )
}

export function Register() {

    useEffect(() => {

        console.log("Register Mounted");

        return () => {
            console.log("Register Unmounted");
        }

    }, []);

    return (
        <div>
            <h3>Register</h3>
        </div>
    )
}

export function CycleDemo() {

    const [view, setView] = useState();

    function handleLogin() {
        setView(<Login />);
    }

    function handleRegister() {
        setView(<Register />);
    }

    return (
        <div className="container p-4">

            <h2>Parent Component</h2>

            <button
                className="btn btn-primary me-2"
                onClick={handleLogin}
            >
                Login
            </button>

            <button
                className="btn btn-success"
                onClick={handleRegister}
            >
                Register
            </button>

            <hr />

            {view}

        </div>
    )
}