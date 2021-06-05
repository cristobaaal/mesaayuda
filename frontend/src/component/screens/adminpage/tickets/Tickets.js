import {useState, useEffect} from 'react';
import {getTickets} from '../../../service/ticketService';
import {ListTickets} from './ListTickets';


export const Tickets = () => {

const [tickets, setTickets] = useState([]);

async function loadTickets(){
  const response = await getTickets()
  
  if(response.status === 200){
    setTickets(response.data)
    console.log(response.data);
  }
  }

 useEffect( () =>{
 loadTickets()
 },[]);

//  const handleSubmit = (data) =>{

//  }


    return (
        <>
    
      <ListTickets tickets={tickets}/>
    
    
        {/* {
            ticket.map(tickets => {
                return {tickets};
        })
        } */}
        
          {/* <form onSubmit={formHandler}>
      <div className="card text-center">
        <div className="card-header">
          <h4><b>gestion tickets</b></h4>
        </div>
        <div className="card-body">
          
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Titulo</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa un título"
                    value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <select name="tipo" className="form-select" aria-label="Default select example" onChange={(e) => setTipo(e.target.value)}>
                    <option selected>Selecciona un tipo</option>
                    <option>Incidente</option>
                    <option>Requerimiento</option>
                  </select>
                </div>
          
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <select name="categoria" className="form-select" aria-label="Default select example" onChange={(e)=> setCategoria(e.target.value)}>
                    <option selected>selecciona una categoría</option>
                    <option value="red">Red</option>
                    <option value="software">Software</option>
                    <option value="hardware">Hardware</option>
                  </select>
                </div>
             
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción del incidente</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
              placeholder="Debe proporcionar la mayor cantidad de antecedentes para dar una solucion a su solicitud..." 
              value={descripcion} 
              onChange={(e)=> setDescripcion(e.target.value)}></textarea>
          </div>


        </div>
        <div className="card-footer text-muted">
          <button type="submit" className="btn btn-primary float-end">Ingresar Ticket</button>
        </div>
      </div>
    </form>   */}
            
        </>
    )
}
