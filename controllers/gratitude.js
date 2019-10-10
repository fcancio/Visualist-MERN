const User = require('../models/user');

module.exports = {
    create,
    getCurrentGratitude,
}

function create(req, res) {
    const obj = {
        first: req.body.first,
        second: req.body.second,
        third: req.body.third
    }
    User.findById(req.body.user._id).then(person => {
            person.gratitude.push(obj)
            person.save() 
            res.status(200).json(obj)
        }
    )
}

async function getCurrentGratitude(req, res) {
    const user = await User.findById(req.params.userId);
    await console.log(user)
    res.status(200).json(user);
  }