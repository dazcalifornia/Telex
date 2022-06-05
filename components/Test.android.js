import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
export default function Test(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello android</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        blackgroundColor:'#454B66',
    },
    text:{
        color:'#9CA3DB',
        textAlign:'center',
        fontSize:30,
        fontweight:'bold',
        padding:10,
    },
})
