const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        maxlength: 10,
    },
    password: {
        type: String,
        minlength: 4,
    },
    admin: {
        type: Number,
        default: 0,
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// 암호화

const User = mongoose.model("User", userSchema);
module.exports = {User}