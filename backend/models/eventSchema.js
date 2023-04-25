const mongoose= require("mongoose");

const eventSchema= mongoose.Schema({
    eventId: {
        type: Number,
        unique: true,
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