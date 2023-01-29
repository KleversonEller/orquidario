import { PrismaClient } from '@prisma/client'

/**
 * @constant prisma
 * ? Estabelece uma conexão com o Prisma ORM instanciando a classe nativa do
 * ? Prisma (PrismaClient)
 */

const prisma = new PrismaClient()

export default prisma
