import './App.css';
import {useState} from 'react'
import React from 'react';
import axios from 'axios';
import img from '../images'



function App() {
  const [phone,setPhone] = useState();
  const [amount,setAmount] = useState();
   const PayHandler=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/token",{
      phone,
      amount,
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return(
    <>

        <Image src={img} alt="mpesa logo"/>
        <input type='Number' className='Phone' placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/>
        <input type='Number' className='Amount'  placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={PayHandler} className='btn'>Pay Now</button>
    </>
  )
}

export default App;
