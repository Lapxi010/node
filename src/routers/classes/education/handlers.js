const postEnroll = (req, res) => {
    try {
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const postExpel = (req, res) => {
    try{
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

module.exports = {postEnroll, postExpel}