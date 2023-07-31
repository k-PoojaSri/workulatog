import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEnvelope,faLock ,faPhone} from "@fortawesome/free-solid-svg-icons";
import { useEffect,useState } from "react";
import Registerimg from './reg.png'
import './registrationform.css'
export function Registationfrom(){
 
  function form_validation(){
    var F_name=document.getElementById("Fname").value
    
    var L_name=document.getElementById("Lname").value
    var mail=document.getElementById("mail").value
    var phone=document.getElementById("phone").value
    var Password=document.getElementById("password").value
    var name_pattern=(/^[a-z A-Z]{3,30}$/);
    var Lname_pattern=(/^[a-z A-Z]{1,15}$/);
    var mail_pattern=(/^[a-z 0-9]{3,20}@[a-z]{3,10}.[a-z]{2,3}$/);
    var phone_pattern=(/^[6-9]{1}[0-9]{9}$/);
    var password_pattern=(/^[a-z A-Z 0-9 @ & * # !]{8,15}$/)

    if(!F_name.match(name_pattern)){
        alert("Invalid Data , first name must have at least 3 characters and no special characters")
    }
    else if(!L_name.match(Lname_pattern)){
        alert("Invalid Data , last name must have at least 1 characters and no special characters")
    }
    else if(!mail.match(mail_pattern)){
        alert("Invalid Email Id")
    }
    else if(!phone.match(phone_pattern)){
        alert("The first digit should contain numbers between 6 to 9")
    }
    else if(!Password.match(password_pattern)){
        alert("password should be minimum 8 characters");
    }
    else{
        alert(" Register Successfully")
    }
  }
    return(
        <>
        
        <div className="Reg_bg">
            <h1 className="text-center text-white">Registation Form</h1>
            <div className="container-fluid row bg-white text-center reg_br p-5">
                <div  className="col-lg-6 mx-auto d-flex flex-column justify-content-center">
                    <img src={Registerimg} className="col-9 col-lg-6 col-md-5  mx-auto"/>
                </div>
                <div className="form_shadow col-lg-6  ">
                
                    <form onSubmit={form_validation}>
                    
                        <br />
                        <div className="border_line col-12 col-lg-7 col-md-5 mx-auto ">
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" placeholder=" First_Name"  id="Fname" className="input_box" />
                            </div>
                            <br />
                        <div className="border_line  col-12 col-lg-7 col-md-5 mx-auto">
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" placeholder=" Last_Name" id="Lname" className="input_box" />
                            </div>
                            <br />
                        <div className="border_line   col-12 col-lg-7 col-md-5 mx-auto">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="mail" placeholder=" Email_Id" id="mail" className="input_box"/>
                            </div>
                            <br />
                        <div className="border_line  col-12 col-lg-7 col-md-5 mx-auto">
                            <FontAwesomeIcon icon={faPhone} />
                            <input type="text" placeholder=" Phone_No" id="phone" className="input_box" />
                            </div>
                            <br />
                        <div className="border_line col-12 col-lg-7 col-md-5 mx-auto">
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" placeholder=" Password" id="password" className="input_box"/>
                            </div>
                            <br />
                       
                        <button type="submit" className="btn btn-success btn_bg" >Submit</button>
                        <button className="btn btn-danger btn_bg">Cancel</button>
                    
                    
                    </form>
                    
                </div>
            </div>
        </div>
      
        </>
    )
}