import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import {TransactionModel} from './models/Transaction.js'

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to mongodb...'))
.catch((error) => console.log(error));

// app.get('/', (req, res) => {
//     res.send('hi');
// });

app.post('/api/transaction', async (req, res) => {
    const {name, price, description, dateTime} = req.body;
    const transaction = await TransactionModel.create({
        name: name.substring(price.length+1),
        price,
        description,
        dateTime
    })
    res.json(transaction);
});

app.get('/api/transactions', async (req,res) => {
    const transactions = await TransactionModel.find();
    res.json(transactions);
});


app.listen(5000);

//