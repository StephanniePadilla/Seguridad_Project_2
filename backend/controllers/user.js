'use strict'

//Aqui definimos que hace la app cuando le llega la peticion
//import {request, Request, Response} from "express";
const User = require('../models/user')


/*** Función listar los usuarios registrados ***/
function getUsers(req, res) {
    User.find({}, (err, userslist) => { //l'array de productes no m'ho dona
        if (err) {
            return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        }
        else if (!userslist) {
            return res.status(400).send({message: 'No existen usuarios registrados'})
        }
        else {
            console.log("Enviando lista de usuarios" + userlist)
            return res.status(200).send(userslist)
        }
    })
}

/*** Función estraer un usuario con el id como parámetro ***/
function getUser(req, res) {
    let userId = req.params.userId
    User.findById(userId, (err, user) => {
        if (err) {
            return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        }
        else if (!user) {
            return res.status(400).send({message: 'El usuario no existe'})
        }
        else {
            console.log("Enviando usuario" + user)
            return res.status(200).send(user)
        }
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
        if (err) {
            return res.status(500).send({message: `Error al crear el usuario: ${err}`})
        }
       else {
            return res.status(200).send({
                message: "Usuario registrado correctamente",
                user: userSaved
            })
        }
    })
}


module.exports={
    getUsers: getUsers,
    getUser: getUser,
    newUser: newUser
}
