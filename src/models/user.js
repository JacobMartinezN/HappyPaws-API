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

// hash user password before saving into database
UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

mongoose.model('User', UserSchema);