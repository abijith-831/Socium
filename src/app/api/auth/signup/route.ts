    import { PrismaClient } from "@prisma/client"
    import bcrypt from 'bcryptjs'

    const prisma = new PrismaClient()

    export async function POST(req:Request){
        try {
            
            const { username , email , password } = await req.json()
            
            const existingUsername = await prisma.user.findUnique({ where: { username } })
            if (existingUsername) {
            return new Response(JSON.stringify({ error: "Username already taken" }), { status: 400 })
            }

            const existing = await prisma.user.findUnique({where:{email}})
            if(existing){
                return new Response(JSON.stringify({error:"Email Already Exists"}),{status:400})
            }

            const hashedPassword = await bcrypt.hash(password,10)

            const user = await prisma.user.create({
                data: {
                username,
                email,
                password: hashedPassword,
                },
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
            
            
            return new Response(JSON.stringify({success:true,user}),{status:200})
        } catch (error) {
            console.error(error)
            return new Response(JSON.stringify({error:"Server Error"}),{status:500})
        }
    }