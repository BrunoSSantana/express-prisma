import { createUserController } from 'controllers/users/createUser';
import { Router } from 'express';

import { DeleteUser } from '../controllers/users/DeleteUser';
import { FindAllUsers } from '../controllers/users/FindAllUsers';
import { FindUniqueUser } from '../controllers/users/FindUniqueUser';
import { UpdateUser } from '../controllers/users/UpdateUser';

const usersRoutes = Router();

const findAllUsers = new FindAllUsers();
const findUniqueUser = new FindUniqueUser();
const updateUser = new UpdateUser();
const deleteUser = new DeleteUser();

// create user
usersRoutes.post('/', createUserController.handle);

// find All Users
usersRoutes.get('/', findAllUsers.handle);

// Find unique User
usersRoutes.get('/:id', findUniqueUser.handle);

// update User
usersRoutes.put('/:id', updateUser.handle);

// delete user
usersRoutes.delete('/:id', deleteUser.handle);

export { usersRoutes };
