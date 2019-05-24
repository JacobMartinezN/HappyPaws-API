const mongoose = require('mongoose');
const Task = mongoose.model('Task');

const Register = async(req, res) => {
    const { title, description, date_time, state, pet_id } = req.body;

    try {
        const task = new Task({
            title,
            description,
            date_time,
            state,
            pet_id
        });
        await task.save();
        return res.status(201).send({
            success: true,
            message: 'Created tas!'
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
};

module.exports = {
    Register
};