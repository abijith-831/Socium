import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {

    console.log('routeeee');
    
    const { username, email, password } = await req.json()
    console.log('emila',username);
    

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: { username, email, password: hashedPassword }
    })

    return new Response(JSON.stringify({ success: true, user }), { status: 201 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 })
  }
}
