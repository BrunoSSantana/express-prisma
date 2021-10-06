import { PrismaClient } from '.prisma/client';

import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const prisma = new PrismaClient();
const createUserUseCase = new CreateUserUseCase(prisma);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
