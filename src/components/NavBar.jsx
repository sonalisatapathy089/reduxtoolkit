import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from "react-redux"
const NavBar = () => {
    const cartProducts = useSelector(state=>state.cart)
  return (
   <div style={{display:"flex", border:"2px solid grey", justifyContent:"space-between"}}>
      <h3 style={{marginLeft:"2rem"}}>Redux Toolkit</h3>
      <NavLink to="/"><h3>products</h3></NavLink>
      <NavLink to="/cart" style={{marginRight:"2rem"}}><h3>My Bag {cartProducts.length}</h3></NavLink>
      
   </div>
  )
}

export default NavBar