import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
export default function Test(){
    return(
        <View style={styles.container}>
            <View style={styles.Header}>
                <Image source={{uri:'https://source.unsplash.com/user/imransuleiman'}} style={styles.image}/>
                <View style={styles.headerDetails}>
                    <Text style={styles.text}>Hello</Text>
                    <Text style={styles.name}>Imran Suleiman</Text>
                </View>
                <Text>@imransuleiman</Text>
            </View>
        </View>
    );
}
const styles=StyleSheet.create({
    Header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        width:'100%',
    },
    container:{
        justifyContent:'flex-start',
        flex:1,
        blackgroundColor:'#322A26',
    },
    headerDetails:{
        flex:1,
        flexDirection:'column',
        paddingTop:10,
    },
    name:{
        color:'#9CA3DB',
        textAlign:'center',
        fontSize: 20,
        fontweight:'bold',
        padding:10,
    },
    text:{
        color:'#9CA3DB',
        textAlign:'center',
        fontSize:35,
        fontweight:'bold',
        padding:10,
    },
    image:{
        width: 75,
        height: 75,
        borderRadius: 75/2,
    },
})
