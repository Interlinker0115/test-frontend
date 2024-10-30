import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect"
import Transaction from "../../models/Transaction"
export async function GET(req) {
    await dbConnect();
    const url = new URL(req.url);
    const username = url.searchParams.get("username")

    try {
        const user = await Transaction.findOne({ userName: username })
        if (!user) {
            const newTransaction = new Transaction({
                userName: username,

            })
            const credit = await newTransaction.save().quantity;
            return new Response(JSON.stringify({ credit }))
        }
        const credit = user.quantity;
        console.log(typeof (credit), credit)
        console.log("success");
        return new Response(JSON.stringify({ credit }), { status: 200 });

        // return NextResponse.json({ credit: credit }, { status: 200 });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ msg: "failed" }), { status: 500 });
    }
}