const mongoose = require('mongoose');

const name = 'Todo';

// Defining the Schema for Todo Data
const TodoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    done: {
        type: Boolean, 
        required: true,
        default: false
    }
});

// Creating and exporting the model of TodoSchema
mongoose.model(name, TodoSchema);
module.exports = { name };