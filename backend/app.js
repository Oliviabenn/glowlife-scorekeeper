const express= require("express");
const mongoose= require("mongoose");
const eventRoute= require("./routes/eventRoute");


const app= express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


const connection= mongoose.connect('mongodb+srv://obennington97:testpass1@cluster0.czstnth.mongodb.net/?retryWrites=true&w=majority')
if(connection){
    console.log("DB CONNECTED");
}

app.use("/", eventRoute);

app.listen(3000, ()=> {
    console.log("Server running on PORT 3000")
})