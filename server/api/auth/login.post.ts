import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { signJwt } from "~/server/utils/jwt"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  const user = await prisma.userprofile.findUnique({ where: { username } })
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw createError({ statusCode: 401, statusMessage: "Invalid credentials" })
  }

  const token = signJwt({ id: user.id, email: user.username })

  return { token, user: { id: user.id, email: user.username } }
})
