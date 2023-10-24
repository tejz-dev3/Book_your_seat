// import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
import WeekendSharpIcon from '@mui/icons-material/WeekendSharp';
import './Seat.css'
import React, { useState } from 'react'
import {standardType} from "../../utilles/data";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addNu,addtempNo } from '../../utilles/resdux/ticketes';
function Seat() {
  const data=useSelector((state)=>state.data.data1);
  const TicketType=useSelector((state)=>state.data.TicketType)
  const no=useSelector((state)=>state.data.no)
  const nu=useSelector((state)=>state.data.nu)
  const dispatch=useDispatch();
  const tempNu=useSelector((state)=>state.data.tempNo);

  return (
    <div> 
        <div className='seat-container'>
            {data && data.map((data1,index) => (
            <button className='seat-button'>
              <p>{data1.seatNo}</p>
              <WeekendSharpIcon onClick={()=>{
                 if(TicketType==="op1" && data1.userSelected!==true){
                  var tempNum=parseInt(tempNu)
                  const modifyData=data.map((dataa,indexx)=>{
                       if(indexx+1>=index+1 && tempNum!==0){
                            if(dataa.available===true && dataa.userSelected===false){
                              tempNum=tempNum-1;
                              
                              dispatch(addtempNo(tempNum))
                                return { ...dataa, userSelected: true };
                            }
                            return dataa;
                       }
                       else{
                        return dataa;
                       }
                   })
                   dispatch(addItem(modifyData))  
               }
                else{
                  var tempNum=parseInt(tempNu)
                  const modifyData=data.map((dataa,indexx)=>{
                       if(indexx+1>=index+1 && tempNum!==0){
                            if(dataa.available===true && dataa.userSelected===false){
                              tempNum=tempNum-1;
                              
                              dispatch(addtempNo(tempNum))
                                return { ...dataa, userSelected: true };
                            }
                            return dataa;
                       }
                       else{
                        return dataa;
                       }
                   })
                   dispatch(addItem(modifyData))
                }
              }
               
              } key={index} style={{ height: '50px', width: '50px', margin:'4px',  stroke: 'black', strokeWidth: 1}} className={`seat ${data1.userSelected===true?'green':data1.available===true?'white':'gray'}`}/>
            </button>
            ))
}
       </div>
     
    </div>
    
  )
}

export default Seat