const rateLimit = require('express-rate-limit')
const Ajv = require('ajv')

require('dotenv').config()

const thisAuth = (req, res, next) => {
    if (req.headers.authorization){
        if(req.headers.authorization === process.env.PASSWORD){
            return next()
        }
        return res.status(401).json({message: 'пароль не верный'})
    }
    return res.status(401).json({message: 'Нет поля'})
}

const logger = (req, res, next) => {
    const log = {
        method: req.method,
        time: new Date(),
        body: req.body
    }
   console.log(log)
    next()
}

const limiter = (numRequests, resetIn) => rateLimit({
    windowMs: resetIn,
    max: numRequests,
    headers: false
})

const validator = (schema) => (req, res, next)=>{
    const ajv = new Ajv({allErrors: true})
    const validate = ajv.compile(schema)

    const valid = validate(req.body)
    if (valid){
        return next();
    }

    res.status(400).json({message: 'valid fail'})

}

module.exports = {thisAuth, logger, limiter, validator}