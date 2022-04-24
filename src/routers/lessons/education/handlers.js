const postVideo = (req, res) => {
    try{
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const postKeynote = (req, res) => {
    try{
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const getReproduce = (req, res) => {
    try{
        res.sendStatus(200)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const deleteVideo = (req, res) => {
    try{
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const getKeynote = (req, res) => {
    try{
        res.sendStatus(200)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const deleteKeynote = (req, res) => {
    try{
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

module.exports = {postVideo, postKeynote, getReproduce, deleteVideo, getKeynote, deleteKeynote}

