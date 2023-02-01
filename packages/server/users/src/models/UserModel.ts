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
    console.log(data)
    return user
  }

  public async login (email: string): Promise<users> {
    const login = await this._connect.users.findUnique({
      where: {
        email
      }
    })
    return login
  }

  public async updateUser (id: string, data: IUser): Promise<users> {
    const update = await this._connect.users.update({
      where: { id },
      data
    })
    return update
  }

  public async deleteUser (id: string) :Promise<void> {
    await this._connect.users.delete({
      where: { id }
    })
  }
}
