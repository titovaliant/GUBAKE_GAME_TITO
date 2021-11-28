// router.js
const router = require('express' ).Router()
const passport = require('./lib/passport')

// Controllers
const auth = require('./controllers/authController' )

const restrict = require('./middlewares/restrict')
router.get('/home', restrict, (req, res) => res.render('index'))

// Homepage
router.get('/home', (req, res) => res.render('index'))

// Register Page
router.get('/register' , (req, res) => res.render('register' ))
router.post('/register' , auth.register )

router.post('/login', auth.login)
router.get('/login', (req, res) => res.render('login'))

module.exports = router;