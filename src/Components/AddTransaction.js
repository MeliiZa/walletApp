import React, {useState} from 'react'
import {StyleSheet, Button,Text} from 'react-native'
import {Container, Content, Form, Item, Input} from "native-base"
import {addTransaction} from '../store/actions/transactionActions';
import {useDispatch} from 'react-redux';




function AddTransaction() {
    const dispatch = useDispatch();
    const [title, setTitle]= useState('');
    const [price, setPrice]= useState('');

    const onSubmit = () => {
        if(!title|| !price){
            return alert ('Please fill all the fields')
        }
        const id = Math.floor (Math.random()* 6000000);

        const newTransaction={
            id,
            title,
            price: +price,
        }
        dispatch(addTransaction({...newTransaction}));
    
    }


    return (
        <Container>
            <Content>
                <Form>
                    <Item style ={{...styles.item}}>
                        <Input 
                        placeholder="Expense Title" 
                        onChangeText={(title) => setTitle(title)}/>
                    </Item>
                    <Item style ={{...styles.item}}>
                        <Input 
                        placeholder="Expense Price" 
                        keyboardType = "number-pad"
                        onChangeText={(price) => setPrice(price)}
                        onSubmitEditing={onSubmit}/>
                    </Item>
                </Form>
            </Content>
        </Container>
    )
}

const styles =StyleSheet.create({
    item:{
        marginVertical:20
    }
})

export default AddTransaction