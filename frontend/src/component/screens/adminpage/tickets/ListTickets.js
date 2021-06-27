import React from "react";
import { useState } from "react";
import axios from "axios";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import es from "timeago.js/lib/lang/es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faClock
} from "@fortawesome/free-solid-svg-icons";
import { deleteTicketByUser } from "../../../service/ticketService";
timeago.register("es", es);


export const ListTickets = ({ tickets, setDeleteT, loadTickets }) => {
  const [state, setState] = useState("");

  const deleteTickets = async (ide) => {
    deleteTicketByUser(ide);
    setDeleteT(true);
  };

  const updateStates = async (e, id) => {
    e.preventDefault();
    console.log(id);
    const estado = state;
    try {
      await axios.put("http://localhost:4000/tickets/updateState/" + id, {
        estado,
      });
      loadTickets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {tickets.map(
        ({
          autor,
          estado,
          titulo,
          tipo,
          categoria,
          descripcion,
          createdAt,
          _id,
        }) => (
          <div className="row" key={_id}>
            <form onSubmit={(e) => updateStates(e, _id)}>
              <div className="col-md-12 p-2">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-4">
                        <p>Creado por: {autor}</p>
                      </div>

                      <div className="col-md-2 offset-md-4 text-center">
                        <span
                          className={
                            estado === "Iniciado"
                              ? "badge badge-light bg-danger"
                              : estado === "En proceso"
                              ? "badge badge-light bg-warning"
                              : "badge badge-light bg-success"
                          }
                        >
                          Estado: {estado}
                        </span>
                      </div>
                      <div className="col-md-2">
                        <select
                          required
                          name="estado"
                          //value={state}
                          //className="form-control"
                          onChange={(e) => setState(e.target.value)}
                        >
                          <option>Estado</option>
                          <option>En proceso</option>
                          <option>Cerrado</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">{descripcion}</div>
                  <div className="card-footer">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">Tipo: {tipo}</div>
                        <div className="row">Categoria: {categoria}</div>
                      </div>
                      <div className="col-md-4">
                        <center>
                          <p>Ticket generado</p>
                        </center>
                        <center>
                        <FontAwesomeIcon icon={faClock} className="text-dark mr-2" />  <TimeAgo datetime={createdAt} locale="es" />
                        </center>
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-outline-info" type="submit">
                          Actualizar
                        </button>{" "}
                        {/*  onClick={(e) => updateStates(_id)}  */}
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => deleteTickets(_id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )
      )}
    </>
  );
};
