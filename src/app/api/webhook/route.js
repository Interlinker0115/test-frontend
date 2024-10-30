import Stripe from 'stripe';
import { headers } from 'next/headers';
import dbConnet from "../../lib/dbConnect"
import Transaction from "../../models/Transaction"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    await dbConnet();
    console.log(request, "--request")
    const body = await request.text();
    // console.log(body, "------->body")
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    console.log(endpointSecret, "------->endpointSecret")
    const sig = headers().get('stripe-signature');
    console.log(sig, "------->sig")
    let event;
    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
        console.log(event, "--------event")
    } catch (err) {
        return new Response(`Webhook Error: ${err}`, {
            status: 400
        });
    }
    const eventType = event.type;
    console.log(eventType, "--------------->>>event")
    if (eventType !== 'checkout.session.completed') {
        return new Response('Server Error', {
            status: 500
        });
    }
    const data = event.data.object;
    const metadata = data.metadata;
    const userName = metadata.username;
    console.log(userName, "---------------usename")
    const quantity = metadata.quantity
    console.log(quantity, "----------------quantity")
    // const created = data.created;
    // const currency = data.currency;
    const customerDetails = data.customer_details.email;

    try {
        const user = await Transaction.findOne({ userName: userName });
        const credit = user.quantity;
        const newCredit = Number(quantity) + Number(credit);

        await Transaction.updateOne({ userName: userName }, { $set: { quantity: newCredit } })
        console.log(newCredit, "--------newcredit");

        return new Response(JSON.stringify({ msg: "Credit updated" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ msg: "failed to update credit" }), { status: 500 });
    }
}