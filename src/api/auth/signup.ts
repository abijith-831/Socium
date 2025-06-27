import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { username, email, password } = await req.json()
  const hashedPassword = await bcrypt.hash(password, 10)

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return new Response('User already exists', { status: 400 })
  }

  const user = await prisma.user.create({
    data: { username, email, password: hashedPassword }
  })

  return new Response(JSON.stringify({ success: true, user }), { status: 201 })
}
