import validateUser from '@middleware/validateUserMiddleware'
import UserModel from '@models/UserModel'
import Hash from '@utils/Hash'
import PersonalError from '@utils/Personal.error'
import Token from '@utils/Token'
import { StatusCodes } from 'http-status-codes'
import { IUser } from 'src/interfaces/userInterface'

export default class UserService {
  private readonly _model: UserModel

  constructor (model: UserModel) {
    this._model = model
  }

  public async newUser (data: IUser): Promise<void | string> {
    validateUser.newUserValidate(data)
    const passwordHash = await Hash.newHash(data.password)

    try {
      await this._model.newUser({
        ...data, password: passwordHash
      })
      return 'Usuário criado com sucesso'
    } catch (error: unknown) {
      throw new PersonalError(StatusCodes.BAD_REQUEST, 'Usuário já existe') // Error 400
    }
  }

  public async login (data: IUser): Promise<string> {
    validateUser.loginValidate(data)
    const user = await this._model.login(data.username)

    if (!user) {
      throw new PersonalError(StatusCodes.BAD_REQUEST, 'Usuário não existe') // Error 400
    }

    const validPassword = await Hash.validateHash(data.password, user.password)

    if (!validPassword) {
      throw new PersonalError(StatusCodes.BAD_REQUEST, 'Senha invalida') // Error 400
    }

    return Token.newToken({ id: user.id })
  }
}
