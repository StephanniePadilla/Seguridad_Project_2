'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true, required: true },
  firstName: String,
  lastName: String,
  password: { type: String, select: false }
})



module.exports = mongoose.model('User', UserSchema)