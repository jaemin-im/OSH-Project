var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var i_did_it = require('./routes/i_did_it');
var certificate_list = require('./routes/certificate_list');
var login = require('./routes/login');
var join = require('./routes/join');
var join_script = require('./routes/join_script');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    key: 'sid',
    secret: 'secret',
    cookie: {
        maxAge: 1000*60*60
    }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/i_did_it', i_did_it);
app.use('/certificate_list', certificate_list);
app.use('/login', login);
app.use('/join', join);
app.use('/join_script', join_script);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.post('/join_script', (req, res) => {
    console.log(req.body.email);
    res.send('WELCOME');
})

module.exports = app;
