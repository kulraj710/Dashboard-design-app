// sample schema, will be replaced with actual schema later
const mongoose = require('mongoose');

const UserSchema = newmongoose.Schema({
    name : { 
        type : String,
        required : true
    },
    age : { 
        type : Number,
        default : 0
     },
    
})

const User = mongoose.model('User', UserSchema)

module.exports = User