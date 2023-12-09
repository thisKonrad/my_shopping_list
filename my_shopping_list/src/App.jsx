import './App.css'
import Logo from './components/Logo/Logo.jsx'
import Form from './components/Form/Form.jsx'
import ShoppingList from './components/ShoppingList/ShoppingList.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
//import { useState } from 'react'

export default function App() {

  return (<div className="app">
  <Logo/>
  <Form/>
  <ShoppingList/>
  <Statistics/>
  </div>)
}