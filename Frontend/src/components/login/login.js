import React, { useState } from "react";
import { isAuthenticated } from "../../helper/helper";
import { Link } from "react-router-dom";
import "./login.css";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [eye, seteye] = useState("password");
    const [redirect, setredirect] = useState(false);
    const url=process.env.REACT_APP_API;

    const validateEmail = (email) => {
        {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
    const handleEye = () => {
        let inputElement = document.getElementById('password');
        if (inputElement.type === "password") {
            inputElement.type = "text";
          } else {
            inputElement.type = "password";
          }
    }
    const HandleClick = () => {
        if (email, password) {
            const isVallid = validateEmail(email);
            if (isVallid) {
                fetch(`${url}`, {
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
                        localStorage.setItem("token", JSON.stringify(data.token))
                        localStorage.setItem("user", data.user)
                        setemail("")
                        setpassword("")
                        console.log(isAuthenticated())
                        
                        setredirect(true);
                        
                    }
                })
            } else {
                alert("Please Enter Valid Email");
            }

        } else {
            alert("Please Fill all Fields")
        }
    }

    const performRedirect = () =>{
        if (redirect){
            return <Navigate to="/contacts" />
        }
    }
    return (

        <div id="container">
            {performRedirect()}
            <svg className="containerleft" width="255" height="256" viewBox="0 0 255 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="105" cy="106" r="150" fill="#B2DFFF" />
            </svg>
            
            <svg className="containerright" width="226" height="279" viewBox="0 0 226 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="151" cy="151" r="150" transform="rotate(100.531 151 151)" fill="#B2DFFF" />
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
                    <p>Enter your credentials to access your account</p>
                </div>
                <div className="inputs">
                    <div>
                        <input type="email" className="email" placeholder="User Id" onChange={(e) => { setemail(e.target.value) }} value={email} />
                    </div>
                    <div className="inputpass">
                        <input type="password" id ="password" className="password" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} value={password} />
                        <svg onClick = {handleEye} className="eye" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4285 0C16.619 0 16.8015 0.0760608 16.9357 0.211284C17.0709 0.345402 17.1469 0.527969 17.1469 0.718424C17.1469 0.908878 17.0709 1.09145 16.9357 1.22556L4.07858 14.0826C3.94446 14.2179 3.76189 14.2939 3.57144 14.2939C3.38098 14.2939 3.19841 14.2179 3.0643 14.0826C2.92907 13.9485 2.85301 13.766 2.85301 13.5755C2.85301 13.3851 2.92907 13.2025 3.0643 13.0684L4.11429 12.0255C2.25972 11.0091 0.821209 9.37334 0.0500241 7.40411C0.0162691 7.32262 -0.000735266 7.23517 2.43731e-05 7.14697V7.07554C-0.000735266 6.98734 0.0162691 6.89988 0.0500241 6.8184C1.42859 3.11127 5.36428 0.718424 9.99998 0.718424C11.5585 0.714211 13.1033 1.01007 14.55 1.58985L15.9214 0.211284C16.0555 0.0760608 16.2381 0 16.4285 0ZM10 2.86133C7.63311 2.86133 5.71433 4.7801 5.71433 7.14702C5.71498 8.03106 5.99222 8.89274 6.50719 9.6113L7.55004 8.57559C6.94006 7.4623 7.13778 6.08004 8.03541 5.18241C8.93305 4.28477 10.3153 4.08705 11.4286 4.69703L12.4786 3.65418C11.7561 3.13637 10.8889 2.85899 10 2.86133ZM9.28569 9.90403L12.7857 6.40405C12.8419 6.64748 12.8659 6.89723 12.8571 7.1469C12.8571 8.72485 11.5779 10.004 9.99997 10.004C9.75861 10.001 9.5186 9.9674 9.28569 9.90403ZM19.9999 7.18976V7.07547C20 7.0717 20 7.06793 19.9999 7.06416C19.9992 6.9798 19.9822 6.89633 19.9499 6.81833C19.2781 5.0986 18.0904 3.62898 16.5499 2.61121L13.8642 5.29691C14.1435 5.87352 14.2876 6.50622 14.2857 7.1469C14.2857 9.51382 12.3669 11.4326 9.99997 11.4326C9.36206 11.4457 8.7295 11.3138 8.14998 11.0469L6.21428 12.9826C7.45638 13.3798 8.75306 13.5798 10.0571 13.5754C14.6714 13.5754 18.5714 11.1612 19.9499 7.4469C19.9837 7.36541 20.0007 7.27796 19.9999 7.18976Z" fill="#C5C5C5" />
                        </svg>
                    </div>



                </div>
                <div className="login-form-buttons ">
                    <button className="signin-button" onClick={HandleClick}>Sign In</button>
                    <Link to="/register" ><p className="signup" >Sign Up</p></Link>
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
        </div>

    )
}

export default Login;