import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  const [transactions, setTransactions] = useState('');

  useEffect(() => {
    getTransactions().then(transactions => {
      setTransactions(transactions);
    })
  }, [transactions]);

  async function getTransactions() {
    const url = process.env.REACT_APP_API_URL+'/transactions';

    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
  

  function handleSubmit(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
        name,
        price,
        description, 
        dateTime,
      })
    }).then(res => {
      res.json().then(json => {
        setName('');
        setDescription('');
        setDateTime('');
        console.log('result', json);
      });
    });
  }

  let balance = 0;
  for (const transaction of transactions) {
    balance = balance + transaction.price;
  }

  balance = balance.toFixed(2);
  const fraction = balance.split('.')[1];
  balance = balance.split('.')[0];

  return (
    <main>
      <h1>₹{balance}<span>{fraction}</span></h1>
      <form onSubmit={handleSubmit}>
        <div className="basic">
          <input 
          type="text" 
          placeholder={'+200 new samsung TV'}
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          />
          <input 
          type="datetime-local"
          value={dateTime}
          onChange={(ev) => setDateTime(ev.target.value)}
          />
        </div>
        <div className='description'>
          <input 
          type="text"
          placeholder={'description'}
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          />
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className="transactions">
      {transactions.length >0 && transactions.map(transaction => (
        <div className="transaction">
          <div className="left">
            <div className="name">{transaction.name}</div>
            <div className="description">{transaction.description}</div>
          </div>
          <div className="right">
            <div className={"price " + (transaction.price<0?'red':'green')}>{transaction.price}</div>
            <div className="datetime">{transaction.dateTime}</div>
          </div>
        </div>
      ))}
        
      </div>
    </main>
    
  );
}

export default App;
