import { stripe } from "@/app/lib/stripe"
import { headers } from "next/headers"
import Stripe from "stripe"

export async function POST(req: Request) {
    const body = await req.text()
    const signature = headers().get('Stripe-Signature') as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
          body,
          signature,
          process.env.STRIPE_WEBHOOK_SECRET as string
        );
    } catch (error) {
        return new Response('webhook error', {status: 400})
        
    }
}