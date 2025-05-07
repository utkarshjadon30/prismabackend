// server/controller/userController.ts

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const findAllUser = async () => {
  try {
    return await prisma.userprofile.findMany()
  } catch (err) {
    console.error("Find all users error:", err)
    return []
  }
}

export const createUser = async (data: { name: string }) => {
  console.log(data.name, "dataneme")
  try {
    return await prisma.userprofile.create({
      data: {
        username: data.name,
      },
    })
  } catch (err) {
    console.error("Create user error:", err)
    return { error: "Could not create user" }
  }
}

export const updateUser = async (data: { id: string; name?: string }) => {
  try {
    return await prisma.userprofile.update({
      where: { id: data.id },
      data: {
        username: data.name,
      },
    })
  } catch (err) {
    console.error("Update user error:", err)
    return { error: "Could not update user" }
  }
}

export const deleteUser = async (id: string) => {
  try {
    return await prisma.userprofile.delete({
      where: { id },
    })
  } catch (err) {
    console.error("Delete user error:", err)
    return { error: "Could not delete user" }
  }
}
