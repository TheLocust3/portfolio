var compression = require('compression');
var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');

var configDB = require('./config/database.js');
var strategy = require('./config/passport.js');

var app = express();
const port = app.get('env') === 'production' ? 80 : 2001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(compression());

mongoose.connect(configDB.url);

app.use(passport.initialize());
passport.use(strategy);

var usersRouter = require('./routes/api/users');
var authRouter = require('./routes/api/auth');

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.use(express.static(path.join(__dirname, '../build')));

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);

  res.status(err.status || 500);
  res.json({ status: 'error' });
});

if (app.get('env') === 'production') {
  app.listen('/home/ubuntu/socket/server.sock', () =>
    console.log(`Portfolio api server listening on port ${port}!`)
  );
} else {
  app.listen(port, () => console.log(`Portfolio api server listening on port ${port}!`));
}
