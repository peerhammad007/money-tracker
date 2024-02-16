import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  const [balance, setBalance] = useState('')

  function handleSubmit(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL;
    console.log(url);
  }

  return (
    <main>
      <h1>₹30000<span>.00</span></h1>
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
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for a new TV</div>
          </div>
          <div className="right">
            <div className="price red">-₹5000</div>
            <div className="datetime">15-02-2024 12:46</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description">Created a new website for someone</div>
          </div>
          <div className="right">
            <div className="price green">+₹5000</div>
            <div className="datetime">15-02-2024 12:46</div>
          </div>
        </div>
      </div>
    </main>
    
  );
}

export default App;
