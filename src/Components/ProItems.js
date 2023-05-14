import React, {useContext}  from 'react'
import './proItemsStyle.css'
import {ShopContext} from '../context/ShopContextPro'

const ProItems = (props) => {
  const{id, name, price, image} = props.data;
  const {addToCart, cartItems}= useContext(ShopContext)
  let cartItemCount = cartItems[id]
  return (
    <div>
      <div className="pro-items-container">
      <div className="Img">
        <img src={image} alt="" />
      </div>
      <h3 className='name'>{name}</h3>
      <p className='price'>Rs.{price}</p>
      <button className='pro-add-btn'onClick={()=>addToCart(id)}>Add To Cart{cartItemCount>0 && <> ({cartItemCount})</>}</button>
      </div>
      
    </div>
  )
} 

export default ProItems


