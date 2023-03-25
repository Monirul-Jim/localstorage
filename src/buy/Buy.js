import React from 'react';
import { addDb } from '../fakedb/Fakedb';
import './buy.css'
const Buy = (props) => {
    const {name,img,camera,speciality,benefit,year,price}=props.use;
    const addToCart=(id)=>{
     addDb(id)
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
           <div style={{gap:'20px'}}>
           <button onClick={addToCart}>Purchase</button>
            <button>Remove</button>
           </div>
        </div>
    );
};

export default Buy;