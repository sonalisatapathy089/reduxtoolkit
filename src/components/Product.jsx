import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useDispatch} from "react-redux"
import {add} from "../store/cartSlice"
const Product = () => {
    const dispatch = useDispatch()
  const[products,getProducts]= useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then(result=>getProducts(result))
  },[])
  const addToCart=(product)=>{
    //Dispatch (add) an action
    dispatch(add(product))
  }
  const cards = products.map((product)=>{
    console.log(product);
    return(
    <div style={{display:"flex"}}>
       <Card style={{marginLeft:"45%"}} key={product.id     }>
        <div >
            <Card.Img variant="top" src={product.image} style={{width:"100px", height:"200px"}} />
        </div>
            <Card.Body>
                <Card.Title>{product.title} </Card.Title>
                    <Card.Text>
                       {product.price}
                    </Card.Text>
                <Button style={{background:"green"}} onClick={()=>addToCart(product)}>Add To Cart</Button>
            </Card.Body>
       </Card>
    </div>
    )
  })
  return (
   <>
   <h1>Product Dashboard</h1>
   <div className='row'>
   {cards}
   </div>
   
   </>
  )
}

export default Product