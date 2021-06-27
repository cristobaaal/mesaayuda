ticketCtrl = {};

const Ticket = require('../models/ticket.model');
const User = require('../models/user.model');

ticketCtrl.getTickets = async (req, res) =>{
    const tickets = await Ticket.find();
    res.json(tickets);
}

ticketCtrl.getTicket = async (req, res) =>{
    const ticket = await Ticket.findById(req.params.id);
    res.json(ticket);
}

ticketCtrl.createTicket = async (req, res) =>{
    const {titulo, 
        descripcion, 
        tipo, 
        categoria, 
        estado,
        autor,
        id
    } = req.body; 
        //estado
        
    try {
           const newTicket = new Ticket ({
            titulo, descripcion, tipo, categoria, estado, autor 
        });
        console.log(newTicket);
        await newTicket.save();
        const res = await User.findByIdAndUpdate(id, {
            $push: { tickets: newTicket._id }
          });
        res.json({message:'Ticket creado'})

    } catch (error) {
        res.json({
            success: false,
            error: error.messege,
        });
    }
}

    ticketCtrl.updateState = async (req, res) =>{
        const {estado} = req.body;
        try {
            await Ticket.findByIdAndUpdate((req.params.id) , {  //{_id: req.params.id}
                estado
            });
            res.json({message: 'Estado actualizado'})    
        } catch (error) {
            res.json({
                success: false,
                error: error.messege,
            });
        }    
    }

    ticketCtrl.getFilterTickets = async (req, res) =>{
        const {filter} = req.body;
        console.log(req.body)
        try {
            const iniciados = await Ticket.find({estado: {$eq: filter}});
            res.json(iniciados)
        } catch (error) {
            res.json({
                success: false,
                error: error.messege,
            });   
        }
    }

    ticketCtrl.deleteTicket = async (req, res) =>{
        await Ticket.findByIdAndDelete(req.params.id);
        res.json({message:'Ticket eliminado'})
    }

       // ticketCtrl.updateTicket = async (req, res) =>{
    //     const {titulo, descripcion, tipo, categoria, fechaGestion, fechaCierre, estado} = req.body;
    // await Ticket.findByIdAndUpdate ({_id: req.params.id}, {
    //     titulo,
    //     descripcion, 
    //     tipo, 
    //     categoria,  
    //     fechaGestion, 
    //     fechaCierre, 
    //     estado    
    // }); 
    // res.json({message: 'Ticket actualizado'})   
    // }


module.exports = ticketCtrl;