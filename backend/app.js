const express= require("express");
const mongoose= require("mongoose");
const Event = require("./models/eventSchema");

const app= express();

const connection= mongoose.connect('mongodb+srv://obennington:testpass1@serverlessinstance0.70vjmyk.mongodb.net/?retryWrites=true&w=majority')
if(connection){
    console.log("DB CONNECTED");
}

app.get("/", (req, res)=> {
    res.send("Welcome here again!")
})

app.post("/add-event", (req,res)=> {
     Event.find({eventId: req.body.eventId})
     .then((response)=> {
        if(response.length > 0){
            res.json({
                message: "Event Id alreadys exists"
            })
            return;
        }
        else{
            const event= new Event({
                eventId: req.body.eventId,
                name: req.body.name
            })

            event.save()
            .then(response=> {
                res.status(201).json({
                    statusCode: 201,
                    message: "Event created successfully",
                    event: response
                })
            })
            .catch(err=> {
                res.status(500).json({
                    statusCode: 500,
                    message: "Internal server error",
                    error: err
                })
            })
        }
     })
     .catch(err=> {
        res.status(500).json({
            message: "Internal server error",
            error: err
        })
    })
})

app.listen(3000, ()=> {
    console.log("Server running on PORT 3000")
})