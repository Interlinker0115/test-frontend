import dbConnect from "../../lib/dbConnect"
import Transaction from "../../models/Transaction"
export async function POST(req) {
    await dbConnect();
    console.log("request ==> ", req)
    const { username, newCredit } = await req.json();
    console.log({ username, newCredit }, "----------req.body")
    console.log(newCredit, "---------000000")
    try {
        await Transaction.updateOne({ userName: username }, { $set: { quantity: newCredit } })
        console.log(newCredit, "--------newcredit");

        return new Response(JSON.stringify({ msg: "Credit updated" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ msg: "failed to update credit" }), { status: 500 });
    }
}