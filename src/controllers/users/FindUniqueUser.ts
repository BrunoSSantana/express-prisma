import { PrismaClient } from ".prisma/client";
import { Request, response, Response } from "express";

class FindUniqueUser {
  async handle(request: Request, response: Response): Promise<Response> {
    const prisma = new PrismaClient()
    const { id } = request.params
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return response.json(user)
  }
}

export { FindUniqueUser }