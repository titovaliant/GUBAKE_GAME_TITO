// server.js
var createError = require('http-errors')
const express = require('express')
const app = express()
const path = require('path');
const session = require('express-session')
const flash = require('express-flash')
const { PORT = 8000 } = process.env

// Pertama, setting request body parser
const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// (Ingat! Body parser harus ditaruh paling atas)
app.use(express.urlencoded({ extended: false }))
// Kedua, setting session handler
app.use(
    session({
    secret: 'Buat ini jadi rahasia',
    resave: false,
    saveUninitialized: false
})
)

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/game', (req, res) => {
    res.render('game')
})

app.get('/login-ulang', (req, res) => {
    res.render('login-ulang')
})

// Ketiga, setting passport
const passport = require('./lib/passport')
app.use(passport.initialize())
app.use(passport.session())

// Keempat, setting flash
app.use(flash())

// Kelima, setting view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// Keenam, setting router
const router = require('./router')
app.use(router)
app.listen(PORT, () => {
console.log(`Server nyala di port ${PORT}`)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
  })

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
  
    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })