const express = require('express');
const router = express.Router();
const tasksController = require('../controller/tasksController')
router.post('/', tasksController.createTask);
router.get('/', tasksController.readTasks);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;