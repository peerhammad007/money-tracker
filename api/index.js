import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('hi');
// });

app.post('/api/transaction', (req, res) => {
    res.json(req.body);
})


app.listen(5000)