const usermodel = require("../Models/Usermodel");

class UserController {
    createUser(data) {
        return new Promise(
            (resolve, reject) => {
                try {

                    const user = new usermodel(
                        {
                           ...data
                        }
                    )

                    user.save().then(
                        (succes) => {
                            resolve(
                                {
                                    msg: "Feedback added succesfully",
                                    status: 1,
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                            reject(
                                {
                                    msg: "Feedback not created ",
                                    status: 0,

                                }
                            )
                        }
                    )

                } catch (error) {
                    () => {
                        console.log(error)
                        reject(
                            {
                                msg: "Internal server error",
                                status: 0
                            }
                        )
                    }
                }
            }
        )
    }
    readuser(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let user
                    if (id) {
                        user = await usermodel.findById(id)
                    } else {
                        user = await usermodel.find()
                    }

                    if (user) {
                        resolve(
                            {
                                msg: "Feedback found succesfully",
                                status: 1,
                                user
                            }
                        )
                    } else {
                        reject(
                            {
                                msg: "Feedback not found ",
                                status: 0

                            }
                        )
                    }

                } catch (error) {
                    () => {
                        console.log(error)
                        reject(
                            {
                                msg: "Internal server error",
                                status: 0
                            }
                        )
                    }

                }
            }
        )
    }
    deleteuser(id) {
        return new Promise(
            (resolve, reject) => {
                try {
                    usermodel.deleteOne({ _id: id }).then(
                        (succes) => {
                            resolve(
                                {
                                    msg: "Feedback delete succesfully",
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        () => {
                            reject(
                                {
                                    msg: "Feedback not deleted",
                                    status: 0
                                }
                            )
                        }
                    )

                } catch (error) {
                    () => {
                        console.log(error)
                        reject(
                            {
                                msg: "internal server error",
                                status: 0
                            }
                        )
                    }
                }
            }
        )
    }

}

module.exports = UserController;