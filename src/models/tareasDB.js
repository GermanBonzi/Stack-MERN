const mongoose = require ('mongoose')
const {Schema} = mongoose

const LoginSchema = new Schema({
    usuario:{type: String, required: true},
    contraseña:{type: String , required: true}
})

module.exports = mongoose.model('Login', LoginSchema)