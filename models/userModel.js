const mongoose = require('mongoose')

//Lets make a schema design now
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required!']
    },
    email: {
        type: String,
        required: [true, 'email is required!'],
        unique: true  // Add unique constraint for email
    },
    password: {
        type: String,
        required: [true, 'password is required!']
    }
}, { timestamps: true })

//export
const userModel = mongoose.model('users', userSchema)
module.exports = userModel
