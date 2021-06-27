import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const Navuser = ({history})=> {

  const logoutHandler = () =>{
        localStorage.removeItem("authToken");
        localStorage.removeItem("id");
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellidos");
        localStorage.removeItem("rut");
        localStorage.removeItem("email");
    
      window.location.href= "/";
    }

return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/userhome" >navbar</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/homeuser">Nuevo ticket</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/mistickets">Mis tickets</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userhome">Pricing</Link>
        </li>
        <li className="nav-item">
        </li>
      </ul> 
    </div>
    <div onClick={logoutHandler} className="btn btn-dark">  
    Logout <FontAwesomeIcon icon={faSignOutAlt} className="text-white ml-2" /></div>
  </div>
</nav>
)
};

export default Navuser;