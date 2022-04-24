const getByHash = (req, res) => {
    try{
        res.status(200).json({data: {}})
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const putByHash = (req, res) => {
    try{
        res.status(200).json({hash: ''})
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const deleteByHash = (req, res) => {
    try{
        res.sendStatus(204)
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

module.exports = {getByHash, putByHash, deleteByHash}