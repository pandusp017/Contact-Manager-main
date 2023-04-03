import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const SignUp = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [Confirm, setConfirm] = useState("");
    const [redirect, setredirect] = useState(false);

    const url=process.env.REACT_APP_API;


    const validateEmail = (email) => {
        {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }

    const validatePassword = (password) => {
        let error = '';

        if (!password) {
            error = 'Password is required';
        } else if (password.length < 8) {
            error = 'Password must be at least 8 characters long';
        } else if (!/[A-Z]/.test(password)) {
            error = 'Password must contain at least one uppercase letter';
        } else if (!/[a-z]/.test(password)) {
            error = 'Password must contain at least one lowercase letter';
        } else if (!/\d/.test(password)) {
            error = 'Password must contain at least one number';
        }
        return error;
    }

    const HandleClick = () => {
        if (email, password, Confirm) {
            const isVallid = validateEmail(email);
            const isPasswd = validatePassword(password);
            if (isVallid) {
                if (isPasswd !== "") {
                    alert(isPasswd)
                }
                else {
                    if (password === Confirm) {
                        fetch(`${url}/register`, {
                            method: "POST",
                            headers: { 'Content-Type': "application/json" },
                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        }).then((res) => res.json()
                        ).then((data) => {
                            console.log(data);
                            if (data.error) {
                                alert(data.error)
                            } else {
                                setemail("")
                                setpassword("")
                                setConfirm("")
                                alert(data.message)
                                setredirect(true)

                            }
                        })
                    }else {
                        alert("Password and confirm password must be same")
                    }

                }
            } else {
                alert("Please enter a valid email")
            }
        } else {
            alert("Please Fill all Fields")
        }

    }
    const performRedirect = () =>{
        if (redirect){
            return <Navigate to="/" />
        }
    }
    return (

        <div className="container">
            {performRedirect()}
            <svg className="containerleft" width="255" height="256" viewBox="0 0 255 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="105" cy="106" r="150" fill="#B2DFFF" />
            </svg>

            <div className="Rectangle1">
                <svg className="right" width="178" height="151" viewBox="0 0 178 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.84615" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                </svg>

                <div className="login-logo">
                    <h1>Logo</h1>
                    <p>Create New Account</p>
                </div>
                <div className="inputs3">
                    <div>
                        <input type="email" className="email" placeholder="User Id" onChange={(e) => { setemail(e.target.value) }} value={email} />
                    </div>
                    <div className="inputpass">
                        <input type='password' className="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                    </div>
                    <div className="inputpass">
                        <input type='password' className="c-password" placeholder="Confirm Password" onChange={(e) => { setConfirm(e.target.value) }} value={Confirm} />
                    </div>
                </div>
                <div className="login-form-buttons ">
                    <button className="button1" onClick={HandleClick}>Sign Up</button>
                    <Link to="/" ><p className="signup" >Sign IN</p></Link>
                </div>
                <svg className="left" width="178" height="151" viewBox="0 0 178 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.84615" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="6.84615" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="34.2309" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="61.6152" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="89" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="116.385" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="6.84615" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="34.2304" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="61.6157" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="88.9995" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="116.385" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="143.769" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                    <circle cx="171.154" cy="143.769" r="6.84615" fill="#2DA5FC" fill-opacity="0.5" />
                </svg>

            </div>
            <svg className="containerright" width="226" height="279" viewBox="0 0 226 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="151" cy="151" r="150" transform="rotate(100.531 151 151)" fill="#B2DFFF" />
            </svg>

        </div>

    )
}

export default SignUp;