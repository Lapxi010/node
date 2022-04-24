const postLogin = (req, res) => {
    try{
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}
const postLogout = (req, res) => {
    try {
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

module.exports = {postLogin, postLogout}