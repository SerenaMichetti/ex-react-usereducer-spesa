import { useState } from 'react'
import './App.css'

function App() {
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Lista prodotti:</h1>
      <ul>
        {products.map((products, i) => (
          <li key={i}>
            {products.name} {products.price.toFixed(2)}€
          </li>))}
      </ul>

    </>
  )
}

export default App;