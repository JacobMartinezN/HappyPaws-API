const mongoose = require('mongoose');
const { Schema } = mongoose;

const PetSchema = new Schema({
    name: { type: String, required: false },
    species: { type: String, required: false },
    birthdate: { type: String, required: false },
    gender: { type: String, required: false },
    weight: { type: String, required: false },
    vaccination : { type: String, required: false },
    disease: { type: String, required: false },
    surgery: { type: String, required: false },
    owner_id: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Pet', PetSchema);