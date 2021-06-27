import React from "react";
import { useState, useEffect } from "react";
import { getUserAndTickets } from "../../../service/ticketService";
import Navuser from "../../../nav/navuser";
import TimeAgo from "timeago-react";
import * as timeago from "timeago.js";
import es from "timeago.js/lib/lang/es";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faClock
} from "@fortawesome/free-solid-svg-icons";
timeago.register("es", es);

const MisTickets = () => {
  const [usuario, setUsuario] = useState([]);
  const [ticket, setTickets] = useState([]);

  async function loadUserAndTickets() {
    const response = await getUserAndTickets();
    if (response.status === 200) {
      setUsuario(response.data);
      //console.log(response.data);
    }
  }

  async function loadTicketsByUser() {
    const res = await getUserAndTickets();
    if (res.status === 200) {
      setTickets(res.data.tickets);
      console.log(res.data.tickets);
    }
  }

  //  const deleteTicket = async (id) =>{
  //      console.log(id);
  // const resp = await deleteTicketByUser(id)
  // console.log(resp)
  //  }

  //  async function deleteTicket(id){
  //console.log(id)
  //const resp = await deleteTicketByUser(id)
  //console.log(resp)
  //}

  useEffect(() => {
    loadUserAndTickets();
  }, []);

  useEffect(() => {
    loadTicketsByUser();
  }, []);

  //  useEffect(()=>{
  //      deleteTicketByUser()
  //  },[])

  return (
    <>
      <Navuser />
      {ticket.map(
        ({ createdAt, descripcion, estado, titulo, categoria, tipo, _id }) => (
          <div className="row" key={_id}>
            <div className="col-md-12 p-2">
              <div className="card">
                <div className="card-header">
                  <div className="row">
                    <div className="col-md-4 offset-md-4">
                      <center>{titulo}</center>
                      {/* <center>{usuario.nombre}</center> */}
                    </div>
                    <div className="col-md-3 offset-md-1">
                      <div className="row justify-content-center">
                        <span className="col-md-4">Estado:</span>
                        <span
                          className={
                            estado === "Iniciado"
                              ? "badge badge-light bg-danger col-md-4"
                              : estado === "En proceso"
                              ? "badge badge-light bg-warning col-md-4"
                              : "badge badge-light bg-success col-md-4"
                          }
                        >
                          {estado}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">{descripcion}</div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="row">
                        <p>Categoria: {categoria}</p>
                      </div>
                      <div className="row">
                        <p>Tipo: {tipo}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      {/* <div className="row"> */}
                      <center>
                        <p>Ticket generado</p>
                      </center>
                      {/* </div> */}
                      <center>
                      <FontAwesomeIcon icon={faClock} className="text-dark mr-2" /> <TimeAgo datetime={createdAt} locale="es" />
                      </center>
                    </div>
                    <div className="col-md-4">
                      <p>Departamento: {usuario.departamento}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default MisTickets;
