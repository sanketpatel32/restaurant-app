
import './App.css'
import Meals from './components/Meals/Meals'
import Header from './components/Layout/Header'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
function App() {
  const[cartIsShown,setCartIsShown] = useState(false)
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
    <>
  {cartIsShown && <Cart onClose = {hideCartHandler}/>}
    <Header onShowCart = {showCartHandler}  onHideCart = {hideCartHandler}/>
    <Meals/>
    </>
  )
}

export default App
