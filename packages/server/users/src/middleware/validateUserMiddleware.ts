import Joi from 'joi'
import JoiPassword from 'joi-password-complexity'
import PersonalError from '@utils/Personal.error'
import { IUser } from 'src/interfaces/userInterface'
import { StatusCodes } from 'http-status-codes'

const passwordValid = {
  min: 8,
  max: 35,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1
}

export default class validateUser {
  static newUserValidate (data: IUser): void {
    const { error } = Joi.object({
      username: Joi.string().required().min(3),
      password: JoiPassword(passwordValid).required(),
      email: Joi.string().required().email(),
      phone: Joi.number().max(11).min(9),
      permission: Joi.string().required()
    }).validate(data)

    if (error) {
      throw new PersonalError(StatusCodes.METHOD_NOT_ALLOWED, error.message) // Error 405
    }
  }

  static loginValidate (data:IUser): void {
    const { error } = Joi.object({
      username: Joi.string().required().min(3),
      password: JoiPassword(passwordValid).required()
    }).validate(data)

    if (error) {
      throw new PersonalError(StatusCodes.METHOD_NOT_ALLOWED, error.message) // Error 405
    }
  }
}
