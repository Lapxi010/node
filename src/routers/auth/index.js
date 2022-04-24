const {postLogin, postLogout} = require('./handlers')
const {thisAuth} = require('../../utils/midlewares/index')

const express = require('express')
const router = express.Router()


router.post('/login', [thisAuth], postLogin)
router.post('/logout', postLogout)

module.exports = router