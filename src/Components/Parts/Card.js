import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, FlatList } from "react-native";
import {Button} from 'native-base'
import {useSelector} from 'react-redux'


function Card({navigation}) {

    const{transactions}= useSelector((state) => state.transactions);

    const prices = transactions.map(transaction => transaction.price);
    const totalPrice = prices.reduce((prev,cur)=> (prev += cur),0).toFixed(2);

    const expense = prices.filter(price => price < 0)
    .reduce((prev,cur)=> (prev += cur),0) * -1;

    return (
        <LinearGradient
                colors={["#d50075", "#090979", "#00d4ff"]}
                style={{ ...style.Box }}
                >
                <View style={{ width: "70%", alignItems: "flex-start" }}>
                    <Text
                    style={{
                        fontSize: 15,
                        color: "#fff",
                        fontWeight: "600",
                    }}
                    >
                    Current Balance
                    </Text>
                    <Text
                    style={{
                        fontSize: 35,
                        color: "#fff",
                        fontWeight: "700",
                    }}
                    >
                    ${totalPrice}
                    </Text>
                    <Text
                    style={{
                        marginTop: 35,
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "700",
                    }}
                    >
                    Melissa Zandman
                    </Text>
                    <Text
                    style={{
                        marginTop: 5,
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "700",
                    }}
                    >
                    4234 **** **** 1086
                    </Text>
                </View>

                <View
                    style={{
                    alignItems: "flex-end",
                    width: "30%",
                    }}
                >
                    <View style={{ flex: 1 }}>
                    <Text
                        style={{
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: "800",
                        }}
                    >
                        WalletApp
                    </Text>
                    <Button
                        rounded
                        light
                        style={{
                        padding: 10,
                        marginTop: 32,
                        borderWidth: 3,
                        borderColor: "#fff",
                        backgroundColor: "#E10C62",
                        alignItems: "center",
                        justifyContent: "center",
                        }}
                        onPress={() => {
                        navigation.navigate("Add");
                        }}
                    >
                        <Text style={{ color: "#fff", fontWeight: "700" }}>Add</Text>
                    </Button>
                    <Text
                        style={{
                        marginTop: 30,
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: "700",
                        }}
                    >
                        Expense
                    </Text>

                    <Text
                        style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "700",
                        }}
                    >
                        ${expense}
                    </Text>
                    </View>
                </View>
                </LinearGradient>
    )
}

const style = StyleSheet.create({
    Box: {
      width: "100%",
      height: 189,
      borderRadius: 15,
      flexDirection: "row",
      padding: 22,
    },
  });

export default Card;