// app/api/webhooks/clerk/route.ts
import { Webhook } from 'svix'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET

  if (!WEBHOOK_SECRET) {
    return new Response('Missing Clerk webhook secret', { status: 500 })
  }

  try {
    const payload = await req.text()
    const headers = {
      'svix-id': req.headers.get('svix-id') ?? '',
      'svix-timestamp': req.headers.get('svix-timestamp') ?? '',
      'svix-signature': req.headers.get('svix-signature') ?? '',
    }

    const wh = new Webhook(WEBHOOK_SECRET)
    const evt = wh.verify(payload, headers)

    console.log('Webhook received:', evt)

    return new Response('Webhook processed', { status: 200 })
  } catch (err) {
    console.error('Webhook verification failed:', err)
    return new Response('Webhook verification failed', { status: 400 })
  }
}
