const {get, post} = require('./handlers')
const {getByHash, putByHash, deleteByHash} = require('./hash/handlers')
const {postVideo, postKeynote, getReproduce, deleteVideo, getKeynote, deleteKeynote} = require('./education/handlers')

const express = require('express')
const router = express.Router()

router.get('/', get)
router.post('/', post)

router.get('/:lessonHash', getByHash)
router.put('/:lessonHash', putByHash)
router.delete('/:lessonHash', deleteByHash)

router.post('/:lessonHash/videos', postVideo)
router.post('/:lessonHash/keynotes', postKeynote)
router.get('/:lessonHash/videos/:videoHash', getReproduce)
router.delete('/:lessonHash/videos/:videoHash', deleteVideo)
router.get('/:lessonHash/keynotes/:keynoteHash', getKeynote)
router.delete('/:lessonHash/keynotes/:keynoteHash', deleteKeynote)


module.exports = router