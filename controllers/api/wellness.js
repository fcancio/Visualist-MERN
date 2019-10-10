const User = require('../../models/user');

module.exports = {
  create,
  getCurrentWellness,
  delete: deleteOne,
  update
};

async function deleteOne(req, res) {
  const deletedWellness = await User.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedWellness);
};

async function update(req, res) {
  const updatedWellness = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedWellness);
};

async function getCurrentWellness(req, res) {
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
            person.wellness.push(obj)
            person.save() 
            res.status(200).json(obj)
        }
    )
};