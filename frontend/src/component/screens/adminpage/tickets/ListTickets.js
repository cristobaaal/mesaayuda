import React from 'react';


export const ListTickets = ({tickets}) => {
    return (
    <>
        {
        tickets.map(({titulo, tipo, categoria, descripcion, _id }) => (
        <div className="container" key={_id}>
        <div className="row"> 
            <div className="col-md-3">
                    <div className="card">
                    <div className="card-header">
                    <center>{titulo}</center>
                    </div>    
                        <div className="card-body">
                             {descripcion}
                        </div>
                    <div className="card-footer">
    
                    </div>
                    </div>
             </div>
         </div>
        </div>
        ))
        
        }
        
    </>
    )
}
