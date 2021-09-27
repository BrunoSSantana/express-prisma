import { Prisma, PrismaClient } from ".prisma/client"
import { Request, Response } from "express"

class UpdateUser {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const prisma = new PrismaClient()
      const { id } = request.params
      const data: Prisma.UserUpdateInput = request.body

      const user = await prisma.user.update({
        where: {
          id
        },
        data,
      })

      return response.json(user)

    } catch (error) {
      return response.json(error)
    }
  }
}

export { UpdateUser }