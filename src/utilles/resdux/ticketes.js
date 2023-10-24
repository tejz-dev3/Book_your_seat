import { createSlice } from "@reduxjs/toolkit";
import {standardType,PrimiumType} from "../../utilles/data";
const ticketes=createSlice({
    name:"ticketes",
    initialState:{
        data1: standardType,
        TicketType: "op1",
        no:1,
        nu:0,
        tempNo:1
    },
    reducers:{
        addItem: function(state,action){
            return {...state,data1:action.payload}
        },
        addTicketType:function(state,action){
           return {...state,TicketType:action.payload}
        }
        ,
        addNo:function(state,action){
            return {...state,no:action.payload}
        }, addNu:function(state,action){
            return {...state,nu:action.payload}
        },
        addtempNo:function(state,action){
            return {...state,tempNo:action.payload}
        }
    }
})
export const {addItem,addTicketType,addNo,addNu,addtempNo}=ticketes.actions;
export default ticketes.reducer;