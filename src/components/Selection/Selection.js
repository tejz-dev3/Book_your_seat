import React from 'react'
import './Selection.css'
import {standardType,PrimiumType} from "../../utilles/data.js";
import {useState} from "react"
import {addTicketType,addNo, addItem,addtempNo} from "../../utilles/resdux/ticketes.js";
import { useDispatch, useSelector } from "react-redux";
function Selection() {
  const data=useSelector((state)=>state.data.data);
  const TicketType=useSelector((state)=>state.data.TicketType)
  const [type,setType]=useState("op1");
  const [no,setNo]=useState("1");
  const [noOfSet,setnoOfSet]=useState(0)
  const dispatch=useDispatch();
  function fun(){
   dispatch(addItem(PrimiumType))
  }
 
  return (
    <div>
    <select value={type} onChange={(e)=>{e.target.value==="op1"?dispatch(addItem(standardType)):fun();dispatch(addTicketType(e.target.value));setType(e.target.value)}} className='ticket-type' id="my-select">
        <option value="op1">Standard</option>
        <option value="op2">Premium</option>
  </select>
  <select value={no} onChange={(e)=>{dispatch(addNo(parseInt(e.target.value)));dispatch(addtempNo(parseInt(e.target.value)));setNo(e.target.value);type==="op1"?dispatch(addItem(standardType)):dispatch(addItem(PrimiumType))
  }}  className='qty'>
        <option value="">Qty</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
  </select></div>
  )
}

export default Selection