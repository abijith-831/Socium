import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export { prisma }

export async function POST(req) {
  try {
    const body = await req.json()

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email:body.email,
        password: body.password || null
      },
    })

    return NextResponse.json({ success: true, id: user.id })
  } catch (error) {
    console.error('Error saving profile:', error)
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
  }
}
