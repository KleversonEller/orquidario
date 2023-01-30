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
}
