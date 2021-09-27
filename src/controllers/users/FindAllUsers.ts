import { PrismaClient } from ".prisma/client";
import { Request, Response } from "express";

class FindAllUsers {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()

    const users = await prisma.user.findMany()

    return response.json(users)
  }
}

export { FindAllUsers }
