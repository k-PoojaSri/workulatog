import React from "react";

export function Updateusedt(){
    return(
    <>
    <div>
        <div className="bg-info p-5 col-lg-6 mx-auto">
            <h1 className="text-center mb-5">Update Your Profile</h1>
      
        <form class="row g-3">
    <div className="col-lg-5">
        <input type="Emolpye ID" className="form-control" placeholder="Employe ID" id="employe_id"/>
    </div>
  <div class="col-lg-5">
    <input type="email" class="form-control" id="f_name" placeholder="First Name"/>
  </div>
  
  <div class="col-lg-5">
    <input type="password" class="form-control" placeholder="Last Name" id="l_name"/>
  </div>
 
  <div className="col-lg-5">
    <input type="password" placeholder="Password" className="form-control" id="password"/>
  </div>
  
  <div class="col-lg-5">
  <label for="inputState" class="form-label">Date of Birth</label>
    <input type="date" class="form-control" id="date_of_birth"/>
  </div>
  
  <div class="col-lg-5">
    <input type="text" placeholder="Email" class="form-control" id="inputZip"/>
  </div>
        <br/>
  
  <div className="col-lg-5">
    <input type="text" placeholder="Designation/role" className="form-control" id="design_role"/>
  </div>

    <div class="col-lg-5">
    <label for="inputState" class="form-label">Branch</label>
    <select id="domain" class="form-select">
      <option selected>Choose...</option>
      <option>Coimbatore</option>
      <option>Chennai</option>
      <option>Banglore</option>
      <option>Thrissur</option>
    </select>
  </div>

  <div class="col-lg-5">
    <label for="inputState" class="form-label">Domain</label>
    <select id="domain" class="form-select">
      <option selected>Choose...</option>
      <option>FS</option>
      <option>WD</option>
      <option>IMS</option>
      <option>DM</option>
      <option>SAP</option>
    </select>
  </div>
  <div class="col-lg-5">
    <label for="inputCity" class="form-label">Age</label>
    <input type="number" class="form-control" id="inputCity"/>
  </div>
 
  <div class="col-lg-5">
    <label for="inputCity" class="form-label">Date of Join</label>
    <input type="date" class="form-control" id="date_of_join"/>
  </div>

  <div class="col-lg-5">
    <label for="inputState" class="form-label">gender</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
 
  <div class="col-lg-5">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="formcheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class=" col-lg-5">
    <button type="submit" class="btn btn-danger col-12">Save changes</button>
  </div>
  <div class="">
    <button type="submit" class="btn btn-warning col-12">Sign in</button>
  </div>
</form>
        </div>

    </div>
    </>

    );
}