import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event)

  const existing = await prisma.userprofile.findUnique({ where: { username } })
  if (existing)
    throw createError({ statusCode: 400, statusMessage: "User exists" })

  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.userprofile.create({
    data: { username, password: hashed },
  })

  return { id: user.id, username: user.username }
})
