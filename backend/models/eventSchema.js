const mongoose= require("mongoose");

// Schema maps to a MongoDB collection
// defines the shape of the documents within that collection.

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

// If you want to add additional keys later, use Schema#add method.