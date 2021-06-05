import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./LoginScreen.css";

const LoginScreen = ({history}) =>{

const[rut, setRut]= useState("");
const[contraseña, setPassword]= useState("");
const[error, setError] = useState("");

// useEffect(()=> {

//     if(localStorage.getItem("authToken") && data.rol==='admin'){
//          history.push("/homeadmin");
//     if (localStorage.getItem("authToken") && data.rol==='user'){
//          history.push("/homeuser");
//     }     
//     else{
//         return(
//         history.push("/login")
//         );
//     }
//     }

// }, [history]);


const loginHandler = async (e)=>{
e.preventDefault();

const config ={
    header:{
        "Content-Type":"application/json",
    },
};

try {
  const {data} = await axios.post('http://localhost:4000/users/login', 
  {rut, contraseña}, config);
  localStorage.setItem("authToken", data.token);  
  //pruebas localStorage
  localStorage.setItem("id", data.id);
  localStorage.setItem("nombre", data.nombre);
  localStorage.setItem("apellidos", data.apellidos);
  localStorage.setItem("rut", data.rut);
  localStorage.setItem("email", data.email);
  if(data.rol === 'admin'){
      history.push("/homeadmin");
  }
  else if (data.rol==='Usuario'){
      history.push("/homeuser");
  }
  else{
      history.push("/");
  }
  
 // data.rol === 'admin' ? history.push('/adminhome') : history.push('/userhome');
 
  //fin pruebas
  //history.push("/");
} catch (error) {
  setError(error.response.data.error);
  setTimeout(()=>{
    setError("");
  }, 6000);
}
};

return(
<div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>ingresar</h3>
                        <form onSubmit={loginHandler}>
                          {error && <span>{error}</span>}

                            <div className="form-group">
                                <input type="text" className="form-control" 
                                placeholder="Ingrese rut" value={rut} 
                                onChange={(e)=> setRut(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" 
                                placeholder="Ingrese contraseña" value={contraseña} 
                                onChange={(e)=> setPassword(e.target.value)}/>
                            </div>

                            <button type="submit" className="btn btn-primary" >
                                login
                            </button>

                            <span className="register-screen__subtext">
                               don't have an account? <Link to="/register">registrate</Link>
                           </span>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    {/*<ul className="list-group">
                        {
                            this.state.users.map(user => <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() =>this.deleteUser(user._id)}>
                                {user.nombre}
                            </li>)
                            
                        }
                      </ul>*/}
                </div>
            </div>

)
}

export default LoginScreen;