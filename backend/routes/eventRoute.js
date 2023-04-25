const Event = require("../models/eventSchema");
const express= require("express");
const router= express.Router();


router.get("/events", (req, res)=> {
    Event.find()
    .then(response=> {
        res.send(response)
    })
    .catch(err=> console.log(err)); 
})


router.post("/add-event", (req,res)=> {
     Event.find({name: req.body.name})
     .then((response)=> {
        if(response.length > 0){
            res.json({
                message: "Event name alreadys exists"
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


router.post


module.exports= router;