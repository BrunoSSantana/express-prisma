import { Prisma, PrismaClient, User } from '.prisma/client'

class CreateUserUseCase {
  constructor(private prisma: PrismaClient) {}
  async execute({
    name,
    email,
    password,
  }: Prisma.UserCreateInput): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    })
    console.log('prsima')

    return user
  }
}
export { CreateUserUseCase }
