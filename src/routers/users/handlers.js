const get = (req, res) => {
    try{
        res.status(200).json({data: []})
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}

const post = (req, res) => {
    try{
        res.status(201).json({hash: ''})
    }catch (e) {
        res.status(400).json({message: e.message})
    }
}


module.exports = {get, post}