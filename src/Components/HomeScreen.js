import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, CheckBox, Body, Right} from 'native-base';
import Card from './Parts/Card';
import Empty from './Parts/Empty';

import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionActions'

function Item({ title, price, id }) {
    const dispatch = useDispatch();
  return (
    <View
      style={{
        marginVertical: 3,
        paddingHorizontal: 30,
        paddingVertical: 15,
      }}
    >
      <ListItem>
        <CheckBox color="#0066cc" onPress={()=>{
            dispatch(deleteTransaction(id))}}/>

        <Body>
          <Text style={{ fontSize: 17, fontWeight: "700", marginLeft: 10 }}>
            {title}
          </Text>
        </Body>
        <Right>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: price >0 ? "#00cc00" : "#FF0000",
            }}
          >
            {price > 0 ? `$${price}`:`$${Math.abs(price)}`}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const HomeScreen = ({ navigation }) => {
  const { transactions } = useSelector((state) => state.transactions);
  return (
    <Container>
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <Card navigation = {navigation}/>
      </Animated.View>

      <View style={{ flex: 1, marginTop: -170 }}>
      {transactions.length > 0 ? (
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <Item title={item.title} price={item.price} id={item.id} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ):(
        <Empty/>
      )}
      </View>
    </Container>
  );
};


export default HomeScreen;
