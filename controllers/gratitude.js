const User = require('../models/user');

module.exports = {
    create,
    getCurrentGratitude,
}


async function getCurrentGratitude(req, res) {
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
            person.gratitude.push(obj)
            person.save() 
            res.status(200).json(obj)
        }
    )
};

// async function update(req, res) {
//     // const updatedGratitude = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true});
//     // const obj = {
//     //     first: req.body.first,
//     //     second: req.body.second,
//     //     third: req.body.third
//     // }
//     // res.status(200).json(updatedGratitude);
//     const person = await User.findById(req.body.user._id)
//     const gratitude = person.gratitude.findById(req.body.person.gratitude._id)

//     gratitude.findByIdAndUpdate(req.params.userId).then()
//     User.findById(req.body.user._id).then(person => {
//         let grat = person.gratitude.id("the id of the graditiude that you are looking for")
//         grat.set("the info that you want to change to most likely from req.body.somthing")
//         // person.save()
//         // res.status(200).json("complete")
//     })

// };