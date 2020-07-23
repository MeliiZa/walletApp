import {ADD_TRANSACTION,DELETE_TRANSACTION} from '../actions/types'

const initialstate = {
    transactions: [
        {id:1, title:'Soup',price: -8},
        {id:2, title:'Paypal payment',price: 250},
        {id:3, title:'Groceries',price: -150},
        {id:4, title:'Printer Paper',price: -4},
        {id:5, title:'Ink Cartiges',price: -6},
        {id:6, title:'Nail Polishes',price: -30},
        {id:7, title:'Leggings',price: -24},
        {id:8, title:'Succulent',price: -8},

    ]
}

export default (state=initialstate,{type,payload})=>{
    switch(type){
        default:
            return state
    }
}