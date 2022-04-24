const {get, post} = require('./handlers')
const {getByHash, putByHash, deleteByHash} = require('./hash/handlers')
const {validator} = require('../../utils/midlewares/index')
const userSchema = require('../../schemas/userSchema')

const express = require('express')
const router = express.Router()


router.get('/', get)
router.post('/', validator(userSchema) ,post)

router.get('/:userHash', getByHash)
router.put('/:userHash', putByHash)
router.delete('/:userHash', deleteByHash)

module.exports = router