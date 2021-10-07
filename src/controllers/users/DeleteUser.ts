import { PrismaClient } from '.prisma/client';

import { Request, Response } from 'express';

class DeleteUser {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const prisma = new PrismaClient();

    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return response.json(user);
  }
}

export { DeleteUser };
