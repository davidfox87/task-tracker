// @desc    get tasks
// @route   GET /api/tasks
// @access  private
const getTasks = (req, res) => {
    res.status(200).json({message: 'get task'})
}

// @desc    get tasks
// @route   GET /api/tasks
// @access  private
const setTask = (req, res) => {
    res.status(200).json({message: 'set task'})
}

// @desc    update task
// @route   PUT /api/tasks/:id
// @access  private
const updateTask =  (req, res) => {
    res.status(200).json({message: `Update task ${req.params.id}`})
}

// @desc    delete tasks
// @route   DELETE /api/tasks/:id
// @access  private
const deleteTask = (req, res) => {
    res.status(200).json({message: `Delete task ${req.params.id}`})
}

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask,
}