import React from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Platform,
  Image,
} from 'react-native';
import Test from './components/Test';
export default function App() {
   return(
     <SafeAreaView style={styles.container}>
        <View style={styles.Header}>
                <View style={styles.headerDetails}>
                  <Image source={{uri:'https://source.unsplash.com/user/imransuleiman'}} style={styles.image}/>
                    <Text style={styles.text}>Hello</Text>
                    <Text style={styles.name}>@username</Text>
                </View>
                <Text>setting</Text>
        </View>
        <View style={styles.box}>
            <Text style={[styles.text, {color:'#263238',textAlign:'left'}]}>Friend</Text>
        </View>
        <View style={styles.menu}>
          <Text>All friend</Text>
          <Text>Closed friend</Text>
          </View>
    </SafeAreaView>
   );
}
const styles = StyleSheet.create({
   container: {
      flexDirection:'column',
     flex: 1,
     alignItems: 'center',
     justifyContent: 'flex-start',
     blackgroundColor:'#322A26',
     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
   },
   Header:{
    borderColor:'#02051f',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:10,
    width:'100%',
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
  box: {
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  menu: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 15,
  },
});
 