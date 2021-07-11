const express = require('express');
const todoController = require('../controllers/todo');

const router = express.Router();

// **********_________Definging The API Functions_________***************

// GET Method ____ to get all
router.get('/', (req, res) => {
    todoController.readAll().then((data) => {
        res.json(data);
    }).catch((err) => {
        console.error("Error occured while fetching the list of todos.");
        console.error(err);
        res.json({
            'error': 'Error occured while trying to fetch the todo list'
        });
    });
});

// POST Method_____ to add new task
router.post('/', (req, res) => {
    todoController.create(req.body.title).then((data) => {
        res.redirect('/todos/'+data._id);
    });
});

// To get task by ID
router.get('/:id', (req, res) => {
    todoController.read(req.params.id).then((data) => {
        res.json(data);
    }).catch((err) => {
        console.error("Error fetching data of id:", req.params.id);
        console.error(err);
        res.json({
            'error': `Could not fetch data for id: ${req.params.id}`
        });
    });
});

// To delete a task from list by ID
router.delete('/:id', (req, res) => {
    todoController.remove(req.params.id).then(() => {
        res.send();
    });
});

// To update a task by given ID
router.put('/:id', (req, res) => {
    let obj = {};
    if(typeof req.body.title !== "undefined")
        obj.title = req.body.title;
    if(typeof req.body.done !== "undefined")
        obj.done = req.body.done;

    todoController.update(req.params.id, obj).then(() => {
        res.redirect(303, '/todos/'+req.params.id);
    });
})


// export the router
module.exports = { router };

