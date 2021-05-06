import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./RegisterScreen.css";

const RegisterScreen = ({history}) =>{

const[nombre, setUsername]= useState("");
const[apellidos, setSurname]= useState("");
const[rut, setRut]= useState("");
const[contraseña, setPassword]= useState("");
const[reContraseña, setRePassword]= useState("");
const[departamento, setDepartment]= useState("");
const[rol, setTypeUser]= useState("");
const[email, setEmail]= useState("");
const[error, setError] = useState("");

useEffect(()=> {
  if(localStorage.getItem("authToken")){
    const {data} = axios.post('http://localhost:4000/users/registro') 
    data.rol === 'admin' ? history.push('adminhome') : history.push('userhome')
    //history.push("/");
  }
}, [history]);

const formHandler= async (e)=>{
e.preventDefault();

const config = {
    header:{
        "Content-Type":"application/json"
    }
}

if(contraseña !== reContraseña){
  setPassword("");
  setRePassword("");
  setTimeout(()=> {
    setError("")
  }, 6000);
  return setError("contraseñas no coinciden");
}
try {
  const {data} = await axios.post('http://localhost:4000/users/registro', 
  {
   nombre, 
   apellidos, 
   rut, 
   contraseña, 
   departamento, 
   rol, 
   email
   }, config);
  localStorage.setItem("authToken", data.token);
   //pruebas localStorage
   localStorage.setItem("id", data.id);
   localStorage.setItem("nombre", data.nombre);
   localStorage.setItem("apellidos", data.apellidos);
   localStorage.setItem("rut", data.rut);
   localStorage.setItem("email", data.email);
   data.rol === 'admin' ? history.push('adminhome') : history.push('userhome');

   //fin pruebas
  //history.push("/login");
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
                        <h3>Crear un nuevo usuario</h3>
                        <form onSubmit={formHandler}>
                          {error && <span>{error}</span>}
                            <div className="form-group">
                                <input type="text" className="form-control" 
                                required placeholder="Ingrese nombre" value={nombre} 
                                onChange={(e)=> setUsername(e.target.value)}/>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" 
                                placeholder="Ingrese apellidos" value={apellidos} 
                                onChange={(e)=> setSurname(e.target.value)}/>
                            </div>

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

                            <div className="form-group">
                                <input type="password" className="form-control" 
                                placeholder="repita contraseña" value={reContraseña} 
                                onChange={(e)=> setRePassword(e.target.value)}/>
                            </div>

                            <div className="form-group">
                               <select name="departamento" className="form-control" onChange={(e)=> setDepartment(e.target.value)}>
                                    <option>-- Seleccione Departamento --</option>
                                    <option>Recursos Humanos</option>
                                    <option>Finanza</option>
                                    <option>Operaciones</option>
                                    <option>Logistica</option>
                                    <option>Sanidad</option>
                                    <option>Proyectos e Infraestructura</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <select name="rol" className="form-control" onChange={(e)=> setTypeUser(e.target.value)}>
                                    <option>-- Seleccione el tipo de usuario --</option>
                                    <option>Usuario</option>
                                    <option>Administrador</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" 
                                placeholder="Ingrese email" value={email} 
                                onChange={(e)=> setEmail(e.target.value)}/>
                            </div>

                            <button type="submit" className="btn btn-primary" >
                                Guardar
                            </button>

                            <span className="register-screen__subtext">
                               Already have an account? <Link to="/login">Login</Link>
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

);
};

export default RegisterScreen;