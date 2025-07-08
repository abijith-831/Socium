import { prisma } from '@/lib/client'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  console.log('update route body',body);
  
  const { id, username, description, city, school, work, website, avatar, cover } = body

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { username, description, city, school, work, website, avatar, cover },
    })

    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false, error: 'Failed to update profile' }, { status: 500 })
  }
}
