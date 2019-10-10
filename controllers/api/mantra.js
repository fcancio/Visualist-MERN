const User = require('../../models/user');

module.exports = {
  create,
  getCurrentMantra
};

async function getCurrentMantra(req, res) {
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
            person.mantra.push(obj)
            person.save() 
            res.status(200).json(obj)
        }
    )
};