import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET || 'poda_pundey'

export async function POST(req:Request){
    try {
        const { email , password } = await req.json()

        const user = await prisma.user.findUnique({
            where: { email },
            include: {
              posts: true,
              comments: true,
              likes: true,
              followers: true,
              following: true,
              followRequestSend: true,
              followRequestReceived: true,
              blockSend: true,
              blockReceived: true,
              stories: true,
            }
          })
          
        if(!user){
            return new Response(JSON.stringify({error:'Invalid email or Password'}),{status:401})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return new Response(JSON.stringify({error:'Invalid email or Password'}),{status:401})
        }

        const token = jwt.sign(
            { id : user.id , email:user.email , username:user.username},
            JWT_SECRET,
            {expiresIn:'7d'}
        ) 

        const cookieStore = await cookies()
        cookieStore.set('token', token, {
          httpOnly: true,
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
        
        return new Response(JSON.stringify({success:true , token , user}),{status:200})
    } catch (error) {
        console.error('Login Error',error)
        return new Response(JSON.stringify({error:'Server Error'}),{status:500})
    }
}