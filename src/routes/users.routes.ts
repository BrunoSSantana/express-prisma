import { PrismaClient } from '.prisma/client'
import { Router } from 'express'
import { CreateUser } from '../controllers/users/CreateUser'
import { DeleteUser } from '../controllers/users/DeleteUser'
import { FindAllUsers } from '../controllers/users/FindAllUsers'
import { FindUniqueUser } from '../controllers/users/FindUniqueUser'
import { UpdateUser } from '../controllers/users/UpdateUser'

const usersRoutes = Router()

const createUser = new CreateUser()
const findAllUsers = new FindAllUsers()
const findUniqueUser = new FindUniqueUser()
const updateUser = new UpdateUser()
const deleteUser = new DeleteUser()

// create user
usersRoutes.post('/', createUser.handle)

// find All Users
usersRoutes.get('/', findAllUsers.handle)

// Find unique User
usersRoutes.get('/:id', findUniqueUser.handle)

// update User
usersRoutes.put('/:id', updateUser.handle)

// delete user
usersRoutes.delete('/:id', deleteUser.handle)

export { usersRoutes }