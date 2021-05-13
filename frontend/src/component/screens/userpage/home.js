import React from 'react';
import Navuser from '../../nav/navuser';
import Ticket from './ticket/ticket';

const userHome = () => {

    return(
        <>
        <Navuser/><br/><br/>
        <div className="container">
<Ticket/>
</div>
        </>

     );
    };
    
    export default userHome;