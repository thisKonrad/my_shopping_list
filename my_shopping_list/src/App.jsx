import './App.css'
import Logo from './components/Logo/Logo.jsx'
import Form from './components/Form/Form.jsx'
import ShoppingList from './components/ShoppingList/ShoppingList.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import { useState } from 'react'


export default function App() {

  const[input, setInput]= useState('Peter');
  const[quantity, setQuantity]= useState(1);

  function handleSubmit(e){
    e.preventDefault();
    const newItem ={
      quantity,
      input, 
      id: Date.now(),
      packed:false,
    };
    console.log(newItem)
  }

  function handleQuantity(e){
    /* value gives always a string */
    setQuantity(Number(e.target.value))
    console.log(typeof quantity)
  }

  function handleChange(e){
    setInput(e.target.value)
    console.log(input)
  }


  return (<div className="app">
  <Logo/>
  <Form 
  handleSubmit={handleSubmit} 
  handleQuantity={handleQuantity}
  handleChange={handleChange}
  quantity={quantity}
  input={input}/>
  <ShoppingList/>
  <Statistics/>
  </div>)
}