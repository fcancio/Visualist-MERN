const User = require('../models/user');

module.exports = {
    create
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
