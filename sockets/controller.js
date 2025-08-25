const TicketControl = require("../models/ticket-control");

const ticketControl = new TicketControl();

const socketController = (socket) => {
    
    socket.on('sigiente-ticket', ( payload, callback ) => {
        const siguiente = ticketControl.siguiente();
        callback( siguiente );
    })

}




module.exports = {
    socketController
}

