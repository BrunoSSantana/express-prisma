import { Prisma } from '.prisma/client';

import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name, password }: Prisma.UserCreateInput = request.body;

    const user = this.createUserUseCase.execute({ email, name, password });

    return response.json(user);
  }
}
export { CreateUserController };
