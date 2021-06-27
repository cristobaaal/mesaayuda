import {useState, useEffect} from 'react';
import axios from 'axios';
import Navuser from '../nav/navuser'
import Ticket from './userpage/ticket/CrearTicket';

const PrivateScreenUser = ({history}) =>{
    // const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
    if(!localStorage.getItem("authToken")){
        history.push("/")
    };


    

    const fetchPrivateData = async () => {
        const config = {
         headers: {
             "Constent-Type": "application/json",
             Authorization: `Bearer ${localStorage.getItem("authToken")}`,
         },
        };
        try {
             const {data} = await axios.get("http://localhost:4000/private", config);
             setPrivateData(data.data); //retorna mensaje que esta en el backend ruta src/controllers/private.js "tiene acceso a los datos privados"
            //  const {data} = axios.get("http://localhost:4000/users");  
            //  data.rol === 'admin' ? history.push('/adminhome') : history.push('/userhome');
                
                     
                

        } catch (error) {
            localStorage.removeItem("authToken");
            history.push("/")
            // error("No estas autorizado, por favor login");
        }
    }

fetchPrivateData();

    }, [history])

//     const logoutHandler = () =>{
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("id");
//     localStorage.removeItem("nombre");
//     localStorage.removeItem("apellidos");
//     localStorage.removeItem("rut");
//     localStorage.removeItem("email");

//     history.push("/login");
// }
//     return(
// error ? <span>{error}</span> : <>
// <div style={{background:"green", color:"white"}}>{privateData}</div>

// <button onClick={logoutHandler}>Logout</button>
// </>
//     );
// };

//pruebas por mi
return(
    <>
    <Navuser history={ history }/>
    <div><input type="hidden" placeholder={privateData}></input></div>
    <Ticket/>
    </> 
     );
    

//fin pruebas
};
export default PrivateScreenUser;