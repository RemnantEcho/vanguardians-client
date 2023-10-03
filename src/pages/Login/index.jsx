import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    const handleSubmit = async e => {
        e.preventDefault();

        console.log(user, pwd);
        setUser("");
        setPwd("");
        navigate("/");
    };

    return (
        <>
            <section className="loginForm">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p>
                <h1 className="signin">Sign In</h1>
                <form id="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={e => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={e => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button data-testid="login-btn">Sign In</button>
                </form>
                <p>
                    Need an Account?
                    <br />
                    <Link to="/signup" style={{ textDecoration: "underline", color: "#237a20" }}>
                        Sign Up
                    </Link>
                </p>
            </section>
        </>
    );
};

export default Login;
