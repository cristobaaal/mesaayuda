import React from 'react';
import {Link} from 'react-router-dom';


const Navadmin = ({history}) => {

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
    <Link className="navbar-brand" to="/userhome" >Help Desk</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/homeadmin">Iniciados</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/homeadmin">En proceso</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/homeadmin">Cerrados</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link disabled" to="/homeadmin" tabIndex="-1" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
    </div>
    <div onClick={logoutHandler} className="btn btn-dark">Logout</div>
  </div>
</nav>
);
};
export default Navadmin;