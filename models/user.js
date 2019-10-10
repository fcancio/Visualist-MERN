const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const mantraSchema = new mongoose.Schema({
  first: String,
}, {
  timestamps: true
});


const meetingsSchema = new mongoose.Schema({
  first: String,
  second: String,
  third: String
}, {
  timestamps: true
});


const wellnessSchema = new mongoose.Schema({
  first: String,
  second: String,
  third: String
}, {
  timestamps: true
});


const taskSchema = new mongoose.Schema({
  first: String,
  second: String,
  third: String
}, {
  timestamps: true
});


const gratitudeSchema = new mongoose.Schema({
  first: String,
  second: String,
  third: String
}, {
  timestamps: true
});


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gratitude: [gratitudeSchema],
  task: [taskSchema],
  wellness: [wellnessSchema],
  meetings: [meetingsSchema],
  mantra: [mantraSchema]
}, {
  timestamps: true
});
  
userSchema.pre('save', function(next) {
    // this will be set to the current document
    const user = this;
    console.log(user)
    if(!user.isModified('password')) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
};


module.exports = mongoose.model('User', userSchema);