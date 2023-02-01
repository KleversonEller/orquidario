import UserService from '@services/UserService'
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export class UsersController {
  private readonly _service: UserService

  constructor (service: UserService) {
    this._service = service
  }

  public async newUser (req: Request, res: Response): Promise<Response> {
    const result = await this._service.newUser(req.body)

    return res.status(StatusCodes.CREATED).json({ message: result }) // Sucesso 201
  }

  public async login (req: Request, res: Response): Promise<Response> {
    const result = await this._service.login(req.body)

    return res.status(StatusCodes.OK).json({ token: result }) // Ok 200
  }

  public async updateUser (req: Request, res: Response): Promise<Response> {
    const result = await this._service.updateUser(req.params.id, req.body)

    return res.status(StatusCodes.ACCEPTED).json({ message: result }) // Accepted 202
  }

  public async deleteUser (req: Request, res: Response): Promise<Response> {
    await this._service.deleteUser(req.params.id)

    return res.status(StatusCodes.OK).json({ Message: 'Usuário excluído com sucesso' }) // Ok 200
  }
}
