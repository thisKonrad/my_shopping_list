import './App.css'
import Logo from './components/Logo/Logo.jsx'
import Form from './components/Form/Form.jsx'
import ShoppingList from './components/ShoppingList/ShoppingList.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import { useState } from 'react'


export default function App() {

  const[input, setInput]= useState('Peter');
  const[quantity, setQuantity]= useState(1);
  const[items,setItems]= useState([]);


  function handleAddItems(item){
    setItems((items)=>[...items, item]);
  }

  function deleteItems(id){
    setItems((items)=> items.filter((item)=> item.id !== id))
    console.log('click')
  }

  function togglePackedItems(id){
    setItems((items)=> items.map((item)=> 
    item.id === id ? {...item, packed: !item.packed} : item
    )); 
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!input){return}

    const newItem ={
      quantity,
      input, 
      id: Date.now(),
      packed:false,
    };
    console.log(newItem)

    handleAddItems(newItem)
    
    setQuantity(1)
    setInput('')
  }

  function handleQuantity(e){
    /* value gives always a string */
    setQuantity(Number(e.target.value))
    console.log(quantity)
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
  <ShoppingList 
  items={items} 
  onDeleteItem={deleteItems} 
  onChecked={togglePackedItems}
  />
  <Statistics items={items}/>
  </div>)
}