//Aqui definimos que hace la app cuando le llega la peticion
//import {request, Request, Response} from "express";
const User = require('../routes/user')


/*** Función listar los usuarios registrados ***/
function getUsers(req, res) {
    User.find({}, {products:0}, (err, userslist) => { //l'array de productes no m'ho dona
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!userslist) return res.status(404).send({message: 'No existen usuarios registrados'})

        return res.status(200).send(userslist)
    })
}

/*** Función estraer un usuario con el id como parámetro ***/
function getUser(req, res) {
    let userId = req.params.userId
    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if (!user) return res.status(404).send({message: 'El usuario no existe'})

        return res.status(200).send(user)
    })
}


/*** Función hacer registro para poder acceder a la app ***/
function newUser(req, res) {
    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        //rol: req.body.rol
    });
    //Guarda el usuario en la bbdd
    user.save((err, userSaved) => {
        if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})
        return res.status(200).send({
            message: "Usuario registrado correctamente",
            user: userSaved
        })
    })
}


module.exports={
    getUsers: getUsers,
    getUser: getUser,
    newUser: newUser
}
