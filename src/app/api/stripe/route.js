import Stripe from 'stripe';
import { currentUser } from "@clerk/nextjs/server";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
    const userInfo = await currentUser();
    console.log(userInfo, "-------userinfo")
    const username = userInfo.username;
    console.log("userid-------->", username);
    const { value } = await req.json();
    // console.log(value, "total----->", process.env.STRIPE_PRICE_ID)
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: process.env.STRIPE_PRICE_ID,
                    quantity: value
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/freeupload?success=true",
            cancel_url: "http://localhost:3000/payment/pay?canceled=true",
            metadata: {
                quantity: value,
                username: username
            }
        })
        const sessionId = session.id;
        console.log(sessionId, "sessionId----->")

        if (sessionId) {
            return new Response(JSON.stringify({ id: session.id }), { status: 200 });
        }
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return new Response(JSON.stringify({ error: 'Error creating checkout session' }), { status: 500 });
    }

}