// requiring all the required library
const express = require('express');
const mongoose = require('mongoose');
const todoModel = require('../models/todo');
const Todo = mongoose.model(todoModel.name);

//***********__________defining the functions for different operations ________************

// to create a new todo
function create(title) {
    const newTodo = new Todo({ title: title });
    return newTodo.save();
}

// to read by id
function read(id) {
    return Todo.findById(id).exec();
}

// to read all
function readAll() {
    return Todo.find({}).exec();
}

// to remove a todo
function remove(id) {
    return Todo.findByIdAndRemove(id, { useFindAndModify: false }).exec();
}

// to update
function updateTitle(id, newTitle) {
    return update(id, {title: newTitle});
}

function updateDone(id, newDone) {
    return update(id, {done: newDone});
}

function update(id, obj) {
    return Todo.findByIdAndUpdate(id, obj, { new: true, useFindAndModify: false }).exec();
}

module.exports = { create, read, readAll, remove, updateTitle, updateDone, update };