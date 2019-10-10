const User = require('../../models/user');

module.exports = {
  create,
  getCurrentTask,
  delete: deleteOne,
  update
};

async function deleteOne(req, res) {
  const deletedTask = await User.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedTask);
};

async function update(req, res) {
  const updatedTask = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedTask);
};

async function getCurrentTask(req, res) {
    const user = await User.findById(req.params.userId);
    await console.log(user)
    res.status(200).json(user);
};

function create(req, res) {
    const obj = {
        first: req.body.first,
        second: req.body.second,
        third: req.body.third
    }
    User.findById(req.body.user._id).then(person => {
            person.task.push(obj)
            person.save() 
            res.status(200).json(obj)
        }
    )
};