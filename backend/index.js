const express= require("express");
const mongoose= require("mongoose");
const eventRoute= require("./routes/eventRoute");
const cors= require("cors");
require('dotenv').config();


const app= express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cors());

//MongoDB test.events

const connection= mongoose.connect(process.env.MONGOURI);
if(connection){
    console.log("DB CONNECTED");
}

app.get("/", (req, res)=> {
res.send("App is running!");
});

app.use("/api/", eventRoute);

app.listen(3000, ()=> {
    console.log("Server running on PORT 3000")
})
