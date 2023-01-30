import UserModel from '@models/UserModel'

import prisma from '@models/connect.prisma'
import UserService from '@services/UserService'
import { UsersController } from '@controllers/UserController'
import { Router } from 'express'

const model = new UserModel(prisma)
const service = new UserService(model)
const controller = new UsersController(service)

const userRouter = Router()

userRouter.post('/newUser', async (req, res) => (controller.newUser(req, res)))

userRouter.post('login', async (req, res) => (controller.login(req, res)))
