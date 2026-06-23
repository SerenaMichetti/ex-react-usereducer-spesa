import { useState } from 'react'
import './App.css'

function App() {
  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];
  const [addedProducts, setaddedProducts] = useState([])
  console.log(addedProducts);

  // prende in input un prodotto 
  // - se il prodotto è già presente nel carrello => non fa nulla
  // - se il prodotto è assente dal carrello => lo aggiunge al carrello
  function addToCart(product) {
    const isAdded = addedProducts.some(p => p.name === product.name)
    if (isAdded) {
      updateProductQuantity(product)
      return
    }
    // lo aggiungo 
    setaddedProducts(curr =>
      [
        ...curr,
        {
          ...product,
          quantity: 1
        }
      ]
    )
  }

  function updateProductQuantity(product) {
    const nuovoArray = addedProducts.map(element => {
      if (element.name === product.name) {
        return { ...element, quantity: element.quantity + 1 }
      }
      return element
    })
    setaddedProducts(nuovoArray)
  }

  function removeFromCart(product){
   setaddedProducts(curr => curr.filter(p=> p.name !== product.name))
  }

  const totalPay= addedProducts.reduce((curr, product)=>{
    return curr + (product.price * product.quantity)
  },0)
  return (
    <>
      <h1>Lista prodotti:</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} {p.price.toFixed(2)}€
            <button onClick={() => addToCart(p)}>Aggiungi al carrello</button>
          </li>))}
      </ul>
      {addedProducts.length > 0 && (<>
        <h2>Prodotti nel carrello:</h2>
        <ul>
          {addedProducts.map((p, i) => (
            <li key={i}>
              {p.name} {p.price.toFixed(2)}€ x {p.quantity}
              <button onClick={() => removeFromCart(p)}>Rimuovi dal carrello</button>
            </li>))}
        </ul>
        <h3>Totale da pagare: {totalPay.toFixed(2)}€</h3>
      </>)}
    </>
  )
}

export default App;