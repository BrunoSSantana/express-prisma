import { Prisma, PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

class CreateUser {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const { email, name, password }: Prisma.UserCreateInput = request.body

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      }
    })
    return response.json(user)
  }
}
export { CreateUser }