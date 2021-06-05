import {useState ,useEffect} from 'react';
import axios from 'axios';
import Navadmin from '../nav/navadmin';
import { Tickets } from './adminpage/tickets/Tickets';

const PrivateScreenAdmin = ({history}) =>{
    // const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
    if(!localStorage.getItem("authToken")){
        //history.push("/login")
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
<div><input type="hidden" placeholder={privateData}></input></div>
<Navadmin history={ history }/>
<Tickets/>
           
            
        
</>
);
//fin pruebas
    };
export default PrivateScreenAdmin;