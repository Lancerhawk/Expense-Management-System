const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

//router objects
const router = express.Router()

//routers
//POST ROUTE OR LOGIN ROUTE
router.post('/login', loginController)

//POST ROUTE OR REGISTER USER ROUTE
router.post('/register', registerController)

module.exports = router
