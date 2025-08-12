const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors")
const userrouter = require("./Routers/Userrouter");

const server = express()

server.use(express.json())
server.use(cors(
    {
        origin: ["http://localhost:5173"]
    }
))
server.use('/users', userrouter )


mongoose.connect(
    "mongodb://localhost:27017/",
    {
        dbName: "students"
    }
).then(
    (succes) => {
        server.listen(
            5000,
            () => {
                console.log("server started at 5000 port")
            }
        )
        console.log("mongo db connected succesfully")
    }
).catch(
    ()=>{
        console.log("mongo db not connected")
    }
)

