import React from "react";
import './loginpage.css';
import kgisllogo from './kgisl.png';
import secureicon from './secureicon.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export function Loginpage(){
    return(
        <>
        <div className="back-img-login pt-3">
            <h1 className="text-center text-white">wor<i><span className="fclr">K</span></i>ulator<i><span className=" fclr">G</span></i></h1>
            <div className="bg-light mx-auto container-fluid row col-lg-11 content-div">
                <div className="col-lg-6 mx-auto ">
                    <img src={kgisllogo} className="col-lg-10 mt-2"/>
                    <img src={secureicon} className="col-lg-7 secureicon"/>
                </div>
               
                <div className="col-lg-5 col-12 col-md-9 text-center mx-auto form-bg p-1 my-5">
                    <br/>
                    <h1>Login</h1>
                    <br/>
                    <div className="div_bor p-1 col-lg-7 col-9 col-md-6 mx-auto">
                    <FontAwesomeIcon icon={faUser} className="icn"/>
                        <input type="text" id="Email" placeholder="User ID" className="inp"/>
                    </div>
                   <br/>
                    
                    <div className="div_bor p-1 col-lg-7 col-9 col-md-6 mx-auto">
                    <FontAwesomeIcon icon={faLock} className="icn" />
                        <input type="password" id="password" placeholder="Password" className="inp" required/>
                    </div>
                    <br/>
                    <div className=" col-lg-5 mx-auto">
                        <Link to='/admin'><button type="button" className="btn btn-outline-primary btn_login col-lg-12">LOGIN</button></Link>
                    </div>
                   <br/>
                   <p>(or)</p>
                    
                    <div>
                        <p>Forgot?<a href="#">Username/password</a></p>
                    </div>
                        <br/>
                    
                    <div>
                        <a href="#">Create Your Account</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}