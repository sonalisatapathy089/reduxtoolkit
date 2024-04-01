import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { remove } from '../store/cartSlice'
const Cart = () => {
    const product = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const removeCart = (id)=>{
        //dispatch remove action
        dispatch(remove(id))
    }
    const cards = product.map((product)=>{
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
                    <Button style={{background:"red"}} onClick={()=>{removeCart(product.id)}}>Remove Item</Button>
                </Card.Body>
           </Card>
        </div>
        )
      })
  return (
    <>
    <h1>Cart Dashboard</h1>
    <div className='row'>
    {cards}
    </div>
    
    </>
  )
}

export default Cart