import React from 'react';
import { addDb, removeCart } from '../fakedb/Fakedb';
import './buy.css'
const Buy = (props) => {
    const {name,img,camera,speciality,benefit,year,price,id}=props.use;
    const addToCart=()=>{
     addDb(id)
    }
    const removeItem=()=>{
        console.log("got it");
        removeCart(id)
    }
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h1>Name:{name} </h1>
            <h3>Camera:{camera}</h3>
            <h3>Product Price:{price}</h3>
            <h3>Speciality:{speciality}</h3>
            <h3>Benefit:{benefit}</h3>
            <h3>Published Year:{year}</h3>
           <button onClick={()=>addToCart()}>Purchase</button>
            <button onClick={()=>removeItem()}>Remove</button>
        </div>
    );
};

export default Buy;