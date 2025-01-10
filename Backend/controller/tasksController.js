const tasksModel = require('../models/tasksModel');
const helperController = require('../controller/helperController');
const enumerations = require('../enumerations/enumerations');

const tasksController = {
    createTask: async (req, res) => {
        try {
            const { name, description } = req?.body;
            const newTask =  new tasksModel({ name, description });
            const newSpecificTask =  newTask;
            await  newSpecificTask.save();   
            const successResponse = {
                _id:  newSpecificTask._id,
                _v: newSpecificTask.__v,
                name: newSpecificTask.name,
                description: newSpecificTask.description,
                message: enumerations?.successMessages?.createTask
            }
            res.status(enumerations?.statusCodeCreated).json(successResponse);
        } catch (error) {
            await helperController?.handleError(req, res, error, enumerations?.errorMessages?.createTaskError, enumerations?.errorCodes.createTaskCode);
        }
    },
    readTasks: async (req, res) => {
        try {
            const tasks = await tasksModel?.find();
            res.status(enumerations?.statusCodeSuccess).json(tasks);
        } catch (error) {
            await helperController?.handleError(req, res, error, enumerations?.errorMessages?.readTaskError, enumerations?.errorCodes?.readTasksCode);
        }
    },

    updateTask: async (req, res) => {
        try {
            const { id } = req?.params;
            const { name, description } = req?.body;
            const task = await tasksModel?.findByIdAndUpdate(id, { name, description }, { new: true, runValidators: true });
            
        
            if (!task) {
                return res.status(enumerations?.statusCodeError).json({
                    statusCode: enumerations?.statusCodeError,
                    message: enumerations?.errorMessages?.taskNotFoundError,
                    originalErrorMessage: null,
                    errorCode: enumerations?.errorCodes?.updateTaskCode
                })
            }
            const successResponse = {
                _id:  task._id,
                _v: task.__v,
                name: task.name,
                description: task.description,
                message: enumerations?.successMessages?.updateTask
            }
            res.status(enumerations?.statusCodeSuccess).json(successResponse);
        } catch (error) {
            await helperController?.handleError(req, res, error, enumerations?.errorMessages?.updateTaskError, enumerations?.errorCodes?.updateTaskCode);
        }
    },
    deleteTask: async (req, res) => {
        try {
            const { id } = req?.params;
            const task = await tasksModel?.findById(id);
            if (!task) {
                return res.status(enumerations?.statusCodeError).json({
                    statusCode: enumerations?.statusCodeError,
                    message: enumerations?.errorMessages?.taskNotFoundError,
                    originalErrorMessage: null,
                    errorCode: enumerations?.errorCodes?.deleteTaskCode                
                })
            }
            const successResponse = {
                _id:  task._id,
                _v: task.__v,
                name: task.name,
                description: task.description,
                message: enumerations?.successMessages?.deleteTask
            }

            await tasksModel?.findByIdAndDelete(id);
            res.status(enumerations?.statusCodeSuccess).json(successResponse);
        } catch (error) {
            await helperController?.handleError(req, res, error, enumerations?.errorMessages?.deleteTaskError, enumerations?.errorCodes?.deleteTaskCode);
        }
    }
};

module.exports = tasksController;