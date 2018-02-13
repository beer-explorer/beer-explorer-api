const mongoose = require('../database');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase:true, 
    },
    password: {
        type: String,
        unique: true,
        select: false,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
})
const User = mongoose.model('User',UserSchema);
module.exports = User;

