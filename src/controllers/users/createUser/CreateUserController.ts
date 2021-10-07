import { Prisma } from '.prisma/client'

import { Request, Response } from 'express'

import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    console.log('opa')
    console.log(this)
    // try {
    const { email, name, password }: Prisma.UserCreateInput = request.body
    console.log('opa', email)

    const user = this.createUserUseCase.execute({ email, name, password })
    console.log(user)
    return response.json(user)
    // } catch (error) {
    //   return response.json(error)
    // }
  }
}
export { CreateUserController }
