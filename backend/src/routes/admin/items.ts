import express from 'express'

const itemRouter = express.Router()

itemRouter.post('/item/create', (req, res) => {
    const user = req.headers.authorization
    res.status(200).send({
        message: 'success',
        token: user
    })
})

export default itemRouter