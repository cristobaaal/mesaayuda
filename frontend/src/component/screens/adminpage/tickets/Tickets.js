import { useState, useEffect } from 'react';
import { getTickets, iniciados, enProceso, cerrado} from '../../../service/ticketService';
import { ListTickets } from './ListTickets';


export const Tickets = (e) => {

  const [tickets, setTickets] = useState([]);
  const [deleteT, setDeleteT] = useState(false);

  async function loadTickets() {
    const response = await getTickets()

    if (response.status === 200) {
      setTickets(response.data)
      console.log(response.data);
    }
  }

  async function getIniciados(){
   const response = await iniciados()
   setTickets(response.data)
  }

  async function getEnProceso(){
    const response = await enProceso()
   setTickets(response.data)
  }


  async function getCerrado(){
    const response = await  cerrado()
    setTickets(response.data)
   }
  useEffect(() => {
    console.log(deleteT)
    if (deleteT === true) {
      loadTickets();
      setDeleteT(false);
    }
  }, [deleteT]);

  useEffect(() => {
    loadTickets()
  }, []);

  //  const handleSubmit = (data) =>{

  //  }


  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <ul className="nav flex-column">
            <li className="nav-item">
              <p className="nav-link active" aria-current="page" onClick={() => loadTickets() } style={{cursor:"pointer", borderBottom:"1px solid #86949B"}}>Todos</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" onClick={() => getIniciados() } style={{cursor:"pointer", borderBottom:"1px solid #86949B"}}>Iniciados</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" onClick={() => getEnProceso() } style={{cursor:"pointer",borderBottom:"1px solid #86949B"}}>En proceso</p>
            </li>
            <li className="nav-item">
              <p className="nav-link" onClick={() => getCerrado() } style={{cursor:"pointer",borderBottom:"1px solid #86949B"}}>Cerrado</p>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <ListTickets tickets={tickets} setDeleteT={setDeleteT} loadTickets={loadTickets} />
        </div>
      </div>




      {/* {
            ticket.map(tickets => {
                return {tickets};
        })
        } */}

      {/* <form onSubmit={formHandler}>
      <div classNameName="card text-center">
        <div classNameName="card-header">
          <h4><b>gestion tickets</b></h4>
        </div>
        <div classNameName="card-body">
          
                <div classNameName="mb-3">
                  <label htmlFor="exampleFormControlInput1" classNameName="form-label">Titulo</label>
                  <input type="text" classNameName="form-control" id="exampleFormControlInput1" placeholder="Ingresa un título"
                    value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                </div>

                <div classNameName="mb-3">
                  <label htmlFor="exampleFormControlInput1" classNameName="form-label"></label>
                  <select name="tipo" classNameName="form-select" aria-label="Default select example" onChange={(e) => setTipo(e.target.value)}>
                    <option selected>Selecciona un tipo</option>
                    <option>Incidente</option>
                    <option>Requerimiento</option>
                  </select>
                </div>
          
                <div classNameName="mb-3">
                  <label htmlFor="exampleFormControlInput1" classNameName="form-label"></label>
                  <select name="categoria" classNameName="form-select" aria-label="Default select example" onChange={(e)=> setCategoria(e.target.value)}>
                    <option selected>selecciona una categoría</option>
                    <option value="red">Red</option>
                    <option value="software">Software</option>
                    <option value="hardware">Hardware</option>
                  </select>
                </div>
             
          <div classNameName="mb-3">
            <label htmlFor="exampleFormControlTextarea1" classNameName="form-label">Descripción del incidente</label>
            <textarea classNameName="form-control" id="exampleFormControlTextarea1" rows="3"
              placeholder="Debe proporcionar la mayor cantidad de antecedentes para dar una solucion p su solicitud..." 
              value={descripcion} 
              onChange={(e)=> setDescripcion(e.target.value)}></textarea>
          </div>


        </div>
        <div classNameName="card-footer text-muted">
          <button type="submit" classNameName="btn btn-primary float-end">Ingresar Ticket</button>
        </div>
      </div>
    </form>   */}

    </>
  )
}
