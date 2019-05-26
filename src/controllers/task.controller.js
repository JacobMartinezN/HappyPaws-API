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
            message: 'Created task!'
        });
    } catch (err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    };
};

const FindTasksByPet = async(req,res) => {
    try {
        const id = req.params.id;
        const tasks = await Task.find({ pet_id: id });

        return res.status(200).send({
            success: true,
            tasks
        });
    } catch(err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    }
};

const EditTask = async(req,res) => {
    const { title, description, date_time, state } = req.body;
    const id = req.params.id;
    try {
        const task = await Task.findById(id);
        task.title = title;
        task.description = description;
        task.date_time = date_time;
        task.state = state
        await task.save();
        return res.status(200).send({
            success: true,
            message: 'Task update successfully'
        });
    } catch(err) {
        return res.status(500).send({
            success: false,
            message: err.message
        });
    }
};

const DeleteTask = async(req,res) => {
    const id = req.params.id;
    try {
        await Task.deleteOne({_id: id})
        return res.status(200).send({
            success: true,
            message: 'Task deleted'
        });
    } catch(err) {
        return res.status(500).send({
            success: false,
            message: err.message
        })
    }
};

module.exports = {
    Register,
    FindTasksByPet,
    EditTask,
    DeleteTask
};