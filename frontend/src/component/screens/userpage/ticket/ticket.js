import { useState } from 'react';
import axios from 'axios';

const Ticket = () => {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState("");

  //   useEffect(()=> {
  //     axios.post('http://localhost:4000/tickets') ;

  // });


  const formHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/tickets', {
        titulo,
        descripcion,
        tipo,
        categoria
      });
    }
    catch (error) {
      setError(error.response.data.error);
    }
  };


  return (
    <form onSubmit={formHandler}>
      {error && <span>{error}</span>}
      <div className="card text-center">
        <div className="card-header">
          <h4><b>Ingrese Nuevo Ticket...</b></h4>
        </div>
        <div className="card-body">
          {/*<h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>*/}

          <table>
            <tr>
              <td>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresa un título"
                    value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                </div>
              </td>
              {/* <td>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu nombre"/>
</div>
   </td>*/}

              <td>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"></label>
                  <select name="tipo" class="form-select" aria-label="Default select example" onChange={(e) => setTipo(e.target.value)}>
                    <option selected>Selecciona un tipo</option>
                    <option>Incidente</option>
                    <option>Requerimiento</option>
                  </select>
                </div>
              </td>
              <td>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label"></label>
                  <select name="categoria" class="form-select" aria-label="Default select example" onChange={(e)=> setCategoria(e.target.value)}>
                    <option selected>selecciona una categoría</option>
                    <option value="red">Red</option>
                    <option value="software">Software</option>
                    <option value="hardware">Hardware</option>
                  </select>
                </div>
              </td>
            </tr>
          </table>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Descripción del incidente</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
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