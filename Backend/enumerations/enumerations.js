const Enumerations = {
  statusCodeError: 403,
  statusCodeCreated: 201,
  statusCodeSuccess: 200,
  errorMessages: {
    taskNotFoundError: "Task not found",
    createTaskError: "Error creating task",
    readTaskError: "Error reading task",
    updateTaskError: "Error updating task",
    deleteTaskError: "Error deleting task",
  },
  errorCodes: {
    createTaskCode: "Creating Task",
    readTasksCode: "Reading Tasks",
    deleteTaskCode: "Deleting Task",
    updateTaskCode: "Updating Task"
  },
  successMessages: {
    deleteTask: "Task deleted successfully",
    updateTask: "Task updated successfully",
    createTask: "Task created successfully"
  }  
}

module.exports = Enumerations;