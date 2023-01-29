/* eslint-disable no-unused-vars */
import 'dotenv/config'
import * as jwt from 'jsonwebtoken'

import PersonalError from './Personal.error'
import { StatusCodes } from 'http-status-codes'

import type { users } from '@prisma/client'
import type { Request, Response, NextFunction } from 'express'

type jwtPayload = {
    data: users;
    iat: number;
    exp: number;
}

export type TokenPayload ={
    id: string
}

const secret = process.env.JWT_SECRET

declare global {
    namespace Express {
        interface Request {
            user: any
        }
    }
}

export default class Token {
  static newToken (data: string | TokenPayload): string {
    const config: jwt.SignOptions = {
      algorithm: 'HS256',
      experesIn: '1d'
    }

    const token = jwt.sign({ data }, secret, config)
    return token
  };

  static decodedToken (req: Request, _res: Response, next: NextFunction): void {
    const token = req.headers.authorization
    if (!token) {
      throw new PersonalError(StatusCodes.EXPECTATION_FAILED, 'Token is required') // Error 417
    }

    try {
      const decoded = jwt.veryfy(token, secret)

      req.user = (decoded as jwtPayload).data
      next()
    } catch (error: unknown) {
      throw new PersonalError(StatusCodes.UNAUTHORIZED, 'Expired or invalid token') // Error 401
    }
  }
}
