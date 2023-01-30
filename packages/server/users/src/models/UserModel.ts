import { PrismaClient, users } from '@prisma/client'
import { IUser } from 'src/interfaces/userInterface'

export default class UserModel {
  private readonly _connect: PrismaClient

  constructor (connect: PrismaClient) {
    this._connect = connect
  }

  public async newUser (data: IUser): Promise<users> {
    const user = await this._connect.users.create({
      data: {
        username: data.username,
        password: data.password,
        email: data.email,
        phone: data.phone,
        permission: data.permission
      }
    })
    return user
  }

  public async login (username: string): Promise<users> {
    const login = await this._connect.users.findUnique({
      where: {
        username
      }
    })
    return login
  }

  public async deleteUser (username: string) :Promise<void> {
    await this._connect.users.delete({
      where: {
        username
      }
    })
  }
}
