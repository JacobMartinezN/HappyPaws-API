const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: { type: String, required: false },
    description: { type: String, required: false },
    date_time: { type: String, required: false },
    state: { type: Boolean, required: false },
    pet_id: { type: Schema.Types.ObjectId, ref: 'Pet'}
});

mongoose.model('Task', TaskSchema);