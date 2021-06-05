import axios from 'axios';

export async function getTickets(){
    try {
        const res = await axios.get('http://localhost:4000/tickets');
        return res;
    } catch (error) {
        console.log(error);
    }
}