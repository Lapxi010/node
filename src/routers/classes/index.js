const {get, post} = require('./handlers')
const {getByHash, putByHash, deleteByHash} = require('./hash/handlers')
const {postEnroll, postExpel} = require('./education/handlers')

const express = require('express')
const router = express.Router()


router.get('/', get)
router.post('/', post)

router.get('/:classHash', getByHash)
router.put('/:classHash', putByHash)
router.delete('/:classHash', deleteByHash)

router.post('/:classHash/enroll', postEnroll)
router.post('/:classHash/expel', postExpel)

module.exports = router