const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');


// load secrets from .env file
require('dotenv').config();
// connect to a database with Mongoose
require('./config/database');


const usersRouter = require('./routes/api/users');
const gratitudeRouter = require('./routes/api/gratitude');
const taskRouter = require('./routes/api/task');
const wellnessRouter = require('./routes/api/wellness');
const meetingsRouter = require('./routes/api/meetings');
const mantraRouter = require('./routes/api/mantra');

const app = express();


/* --- MOUNT logging and middleware --- */
// Configure both serve-favicon & static middlewares to serve from the production 'build' folder
app.use(cors());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));


/* --- API routes --- */
// Put API routes here, before the "catch all" route
// Mount our custom auth middleware to protect routes below it
// app.use(require('./config/auth'));
app.use('/api/users', usersRouter);
app.use('/api/gratitude', gratitudeRouter);
app.use('/api/task', taskRouter);
app.use('/api/wellness', wellnessRouter);
app.use('/api/meetings', meetingsRouter);
app.use('/api/mantra', mantraRouter);


/* --- Catch all --- */
// The following "catch all" route (note the *)is necessary for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});