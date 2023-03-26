import React, { useEffect, useState } from 'react';
import Buy from '../../buy/Buy';
import "./shopping.css"

const Shopping = (props) => {
    const[uses,setUses]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setUses(data))
        },[])
    return (
        <div>
            <h1>Welcome to my mobile shop</h1>
            <div className='phone'>
            {
             uses.map(use=><Buy key={use.id} use={use}></Buy>)
            }
            </div>
        </div>
    );
};

export default Shopping;