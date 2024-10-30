import mongoose from "mongoose"

const TransactionSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    quantity: { type: Number, required: true, default: 2 },
}, { timestamps: true })

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);

export default Transaction;

