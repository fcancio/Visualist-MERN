const User = require('../../models/user');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};


async function show(req, res) {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
}

async function deleteOne(req, res) {
  const deletedUser = await User.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedUser);
}

async function update(req, res) {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedUser);
}