var compression = require('compression');
var createError = require('http-errors');
var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');

var configDB = require('./config/database.js');
var strategy = require('./config/passport.js');

var app = express();
const port = 2001;

app.use(logger('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(configDB.url);

app.use(passport.initialize());
passport.use(strategy);

var usersRouter = require('./routes/api/users');
var authRouter = require('./routes/api/auth');

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    if (req.app.get('env') === 'development') {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        console.log(err);

        res.status(err.status || 500);
        res.json({ status: 'error' });
    } else {
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    }
});

app.listen(port, () => console.log(`Portfolio api server listening on port ${port}!`));
