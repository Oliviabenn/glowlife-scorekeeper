const mongoose= require("mongoose");

//Have a table for events 

const eventSchema= mongoose.Schema({
    eventId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    point: {
        type: Number, 
        default: 0      
    }
})


module.exports= mongoose.model("EVENTS", eventSchema);