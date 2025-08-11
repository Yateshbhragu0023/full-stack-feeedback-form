const express = require("express");
const UserController = require("../Controllers/UserController");
const userrouter = express.Router()

userrouter.post(
    "/register",
    (req, res)=>{
        const result = new UserController().createUser(req.body)

        result.then(
            (succes)=>{
                res.send(succes)
            }
        ).catch(
            (error)=>{
                res.send(error)
                console.log(error)
            }
        )
    }
)

userrouter.get(
    "/",
    (req, res)=>{
        const result = new UserController().readuser(req.params.id)

        result.then(
            (succes)=>{
                res.send(succes)
            }
        ).catch(
            (error)=>{
                res.send(error)
                console.log(error)
            }
        )
    }
)
userrouter.delete(
    "/delete/:id",
    (req, res)=>{
        const result = new UserController().deleteuser(req.params.id)

        result.then(
            (succes)=>{
                res.send(succes)
            }
        ).catch(
            (error)=>{
                res.send(error)
                console.log(error)
            }
        )
    }
)



module.exports = userrouter;