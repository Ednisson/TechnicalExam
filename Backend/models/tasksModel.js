const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 200,
    }
});

const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = Tasks;