import { useState } from 'react';
import axios from 'axios';

const Ticket = () => {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState("");

  //   useEffect(()=> {

  // });


  const formHandler = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem('id');
    const nombre = localStorage.getItem('nombre');
    const apellidos = localStorage.getItem('apellidos');
    const autor = nombre+" "+apellidos;
    try {
      await axios.post('http://localhost:4000/tickets', {
        titulo,
        descripcion,
        tipo,
        categoria,
        autor,
        id
      });
      setTitulo("");
      setCategoria("");
    }
    catch (error) {
      setError(error.response.data.error);
    }
  };


  return (
    <form onSubmit={formHandler} className="p-4">
      {error && <span>{error}</span>}
      <div className="card text-center">
        <div className="card-header">
          <h4><b>Ingrese Nuevo Ticket...</b></h4>
        </div>
        <div className="card-body">
                <div className="mb-0">
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa un título"
                    value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                </div>

                <div className="mb-0">
                  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <select name="tipo" className="form-select" aria-label="Default select example" 
                  defaultValue={'DEFAULT'} onChange={(e) => setTipo(e.target.value)}>
                    <option value="DEFAULT" disabled>Selecciona un tipo</option>
                    <option value="Incidente">Incidente</option>
                    <option value="Requerimiento">Requerimiento</option>
                  </select>
                </div>
          
                <div className="mb-0">
                  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                  <select name="categoria" className="form-select" aria-label="Default select example" 
                  defaultValue={'DEFAULT'} onChange={(e)=> setCategoria(e.target.value)}>
                    <option value="DEFAULT" disabled >selecciona una categoría</option>
                    <option value="red">Red</option>
                    <option value="software">Software</option>
                    <option value="hardware">Hardware</option>
                  </select>
                </div>
             
          <div className="mb-0">
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
    </form>
  )
}

export default Ticket;