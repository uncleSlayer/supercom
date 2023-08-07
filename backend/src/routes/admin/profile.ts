import express from 'express'
import prisma from '../../database/db'
import bcrypt, { hash } from 'bcrypt'
import { z } from 'zod'
import jwt from 'jsonwebtoken'

const adminProfileRouter = express.Router()

adminProfileRouter.post('/admin/signup', async (req, res) => {

    const userSignUpValidation = z.object({
        email: z.string(),
        password: z.string(),
        repassword: z.string()
    })

    const signupData = userSignUpValidation.parse({
        email: req.body.email,
        password: req.body.password,
        repassword: req.body.repassword
    })

    bcrypt.hash(signupData.password, 10)
        .then(async (pass) => {
            const checkUser = await prisma.users.findFirst({
                where: {
                    email: signupData.email
                }
            })

            if (checkUser) {
                res.send({ error: 'user already exists' })
            }

            const user = await prisma.users.create({
                data: {
                    email: signupData.email,
                    password: pass,
                    role: 'ADMIN'
                }
            })

            jwt.sign({
                email: user.email,
                role: user.role,
                id: user.id
            }, 'key', {
                algorithm: 'HS256'
            }, (err, token) => {
                if (err) {
                    res.send(err)
                } else {
                    res.cookie('token', token, {
                        maxAge: 1,
                        httpOnly: true,
                        secure: true
                    })

                    res.send({ message: 'successfully user created' })
                }
            })
        })
})

adminProfileRouter.post('/admin/login', async (req, res) => {

    const userLoginValidation = z.object({
        email: z.string(),
        password: z.string()
    })

    // type loginDataType = z.infer<typeof userLoginValidation>

    const loginData = userLoginValidation.parse({
        email: req.body.email,
        password: req.body.password
    })

    const user = await prisma.users.findFirst({
        where: {
            email: loginData.email
        }
    })

    if (user) {
        console.log(user)
        bcrypt.compare(loginData.password, user.password)
            .then((resp) => {
                if (resp) {
                    // set browser cookies
                    jwt.sign({
                        email: user.email,
                        role: user.role,
                        id: user.id
                    }, 'key', {
                        algorithm: 'HS256'
                    }, (err, token) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.cookie('token', token, {
                                maxAge: 1,
                                httpOnly: true,
                                secure: true
                            })

                            res.send({ message: 'successfully logged in' })
                        }
                    })
                }
                else {
                    res.send({ error: 'tumne wrong password dala tha vro' })
                }
            })
    }
})

export default adminProfileRouter