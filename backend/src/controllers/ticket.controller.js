ticketCtrl = {};

const Ticket = require('../models/ticket.model');

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
        fechaApertura, 
        fechaGestion,
        fechaCierre} = req.body; 
        //estado

    try {
           const newTicket = new Ticket ({
            titulo, descripcion, tipo, categoria, fechaApertura, fechaGestion, fechaCierre //, estado
        });
        await newTicket.save();
        res.json({message:'Ticket creado'})

    } catch (error) {
        res.json({
            success: false,
            error: error.messege,
        });
    }
}
    ticketCtrl.updateTicket = async (req, res) =>{
        const {titulo, descripcion, tipo, categoria, fechaGestion, fechaCierre, estado} = req.body;
    await Ticket.findByIdAndUpdate ({_id: req.params.id}, {
        titulo,
        descripcion, 
        tipo, 
        categoria,  
        fechaGestion, 
        fechaCierre, 
        estado    
    }); 
    res.json({message: 'Ticket actualizado'})   
    }

    ticketCtrl.deleteTicket = async (req, res) =>{
        await Ticket.findByIdAndDelete(req.params.id);
        res.json({message:'Ticket eliminado'})
    }


module.exports = ticketCtrl;