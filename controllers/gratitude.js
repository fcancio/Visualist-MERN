const User = require('../models/user');

module.exports = {
    getCurrentGratitude,
    create,
    delete: deleteGrat,
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

async function deleteGrat(req, res) {
        console.log('CONTROLLER deleteGrat req.params.gratId:', req.params.userId)
    const remove = await User.findOneAndUpdate( {'gratitude._id' : `${req.params.userId}`} ,
    {
        $pull: { gratitude: { _id: `${req.params.userId}` }}
    },
    {new: true},
    function(err, doc){
     console.log(err,doc)
    })
    res.status(200).json(remove);
}

// function deleteGrat(req, res) {
//     //TODO: id in req.params.id should match gratitude id declared in handleDelete method
//     User.findOneAndUpdate( {'item._id' : `${req.params.id}`}).then(remove => {
//             $pull: { gratitude: { _id: `${req.params.id}` }}
//         },
//         {new: true},
//         function(err, doc){
//             console.log(err,doc)
//         }), 
//         res.status(200).json(remove);
// }



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