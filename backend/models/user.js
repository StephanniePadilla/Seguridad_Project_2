'use strict'

const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, required: true },
  firstName: String,
  lastName: String,
  password: { type: String, select: false }
});



module.exports = mongoose.model('User', userSchema);