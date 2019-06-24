const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const saltRounds = 10;

const UserSchema = new Schema({
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    email: { type: String, unique: true, required: false },
    password: { type: String, required: false }
});

mongoose.model('User', UserSchema);