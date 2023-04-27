const express= require("express");
const mongoose= require("mongoose");
const eventRoute= require("./routes/eventRoute");
const cors= require("cors");


const app= express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());

//MongoDB test.events

const connection= mongoose.connect('mongodb+srv://obennington97:testpass1@cluster0.czstnth.mongodb.net/?retryWrites=true&w=majority')
if(connection){
    console.log("DB CONNECTED");
}

app.use("/api/", eventRoute);

app.listen(3000, ()=> {
    console.log("Server running on PORT 3000")
})