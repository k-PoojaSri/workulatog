import React from "react";
import { Link } from "react-router-dom";
import clg from './Microcollege.png'
import './work.css'
export function Admin(){

    return(

        <>

        {/* /.......................NavBar............................./ */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><img src={clg} className="img"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent col-lg-6">
    <ul class="navbar-nav  ">
      <li class="nav-item ">
        <Link class="nav-link" to='/'><h6 className="hv">Admin</h6></Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/registration form/Registationfrom'><h6 className="hv">Add Users</h6></Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle " href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        <h6 className="hv">Centers</h6>
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Coimbatore</a>
          <a class="dropdown-item" href="#">Chennai</a>
          <a class="dropdown-item" href="#">Thrissur</a>
          <a class="dropdown-item" href="#">Bangalore</a>
        </div>
         
      </li>
      <li class="nav-item ">
        <Link class="nav-link" to='/trainer'><h6 className="hv">Trainers</h6></Link>
      </li>
    </ul>
    </div>
</nav>
        </>
    );
}