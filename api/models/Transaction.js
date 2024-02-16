import { model, Schema } from "mongoose";

const TransactionSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    dateTime: {type: String, required: true}
});

const TransactionModel = model('Transaction', TransactionSchema);

export { TransactionModel };