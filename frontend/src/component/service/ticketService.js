import axios from 'axios';

//utilizado en la página del administrador para obtener todos los tickets
export async function getTickets(){
    try {
        const res = await axios.get('http://localhost:4000/tickets');
        return res;
    } catch (error) {
        console.log(error);
    }
}

//utilizado en la página de usuario para obtener sus propios tickets
export async function getUserAndTickets(){
    const id = localStorage.getItem("id")
    try {
        const res = await axios.get('http://localhost:4000/users/' + id );
        return res;
    } catch (error) {
        console.log(error);
    }
}

//utilizado en la página del usuario para eliminar sus propios tickets
export async function deleteTicketByUser(ide){
    const id = localStorage.getItem("id")
try {
    const res = await axios.delete('http://localhost:4000/tickets/'+ide)
    console.log(res)
    const resp = await axios.put('http://localhost:4000/users/'+id, {ide})
    console.log(resp)
    return res;
} catch (error) {
    console.log(error)
}
}

export async function iniciados(){
try {
    const res = await axios.post('http://localhost:4000/tickets/api/filterTickets', {filter: 'Iniciado'})
    console.log(res)
    return res;
} catch (error) {
    console.log(error)
}
}

export async function enProceso(){
    try {
        const res = await axios.post('http://localhost:4000/tickets/api/filterTickets', {filter: 'En proceso'})
        console.log(res)
        return res;
    } catch (error) {
        console.log(error)
    }
    }

    export async function cerrado(){
        try {
            const res = await axios.post('http://localhost:4000/tickets/api/filterTickets', {filter: 'Cerrado'})
            console.log(res)
            return res;
        } catch (error) {
            console.log(error)
        }
        }



// export async function deleteTicketByUser(ide){
//     const id = localStorage.getItem("id")
// try {
//     const res = await axios.delete('http://localhost:4000/tickets/'+ide)
//     console.log(res)
//     const resp = await axios.put('http://localhost:4000/users/'+id, {ide})
//     console.log(resp)
//     return res;
// } catch (error) {
//     console.log(error)
// }
// }

// export async function cerrados(ide){
//     const id = localStorage.getItem("id")
// try {
//     const res = await axios.delete('http://localhost:4000/tickets/'+ide)
//     console.log(res)
//     const resp = await axios.put('http://localhost:4000/users/'+id, {ide})
//     console.log(resp)
//     return res;
// } catch (error) {
//     console.log(error)
// }
// }







// export async function updateState(id){
// try {
//     console.log(id)
//      const res = await axios.put('http://localhost:4000/updateState/'+id)
//      return res;
// } catch (error) {
//     console.log(error)
// }
// }





