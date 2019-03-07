var compression = require('compression');
var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
let cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
let graphqlHTTP = require('express-graphql');
let { graphqlUploadExpress } = require('graphql-upload');

var configDB = require('./config/database.js');
var strategy = require('./config/passport.js');
let graphqlSchema = require('./graphql/schema');
let graphqlRoot = require('./graphql/root');

var app = express();
const port = app.get('env') === 'production' ? 80 : 2001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
app.use(compression());

mongoose.connect('mongodb://localhost/portfolio', configDB);

app.use(passport.initialize());
passport.use(strategy);

app.use(
  '/graphql',
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }),
  graphqlHTTP((req, res, params) => ({
    schema: graphqlSchema,
    rootValue: graphqlRoot(req),
    graphiql: true,
    formatError: (error) => {
      if (req.app.get('env') === 'development') {
        console.log(error);
      }

      return error;
    }
  }))
);

var authRouter = require('./routes/api/auth');
var usersRouter = require('./routes/api/users');
var articlesRouter = require('./routes/api/articles');

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/articles', articlesRouter);

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
