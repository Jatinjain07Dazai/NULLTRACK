import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, ImageBackground, TouchableOpacity, Dimensions, Image} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Wallet({navigation}){

return(
	<ImageBackground source={require('./image/head.jpg')} style={styles.container}>
	<ImageBackground source={require('./image/wbz.jpg')} style={styles.headerback} >
	<View style={{justifyContent:'center', alignItems:'center',}}>
	<Text style={styles.headertext}>WALLET</Text>
	</View>
	</ImageBackground>
	<SafeAreaView style={{width:100, marginLeft:120, marginTop:20,borderBottomWidth:3, borderBottomColor:'aqua',}}>
	<Text style={styles.subtext1}>Hi,</Text>
	</SafeAreaView>
	<SafeAreaView style={{width:140, marginLeft:170, marginTop:0, borderBottomWidth:3, borderBottomColor:'yellow', justifyContent:'center',}}>
	<Text style={styles.subtext2}>JEFFERY</Text>
	</SafeAreaView>
	<SafeAreaView style={{flexDirection:'row', justifyContent:'center', marginTop:25,}}>
	<Text style={{fontSize:30, fontWeight:'bold', color:'#ff2400',}}>BALANCE :</Text>
	<Text style={{fontSize:30, fontWeight:'bold', color:'#118C4F'}}>  $ 1,000,000</Text>
	</SafeAreaView>

	<SafeAreaView style={styles.card}>
	<ImageBackground source={require('./image/cross.jpg')} style={styles.img}>
	<View style={{justifyContent:'space-around',}}>
	<View style={styles.sqr}><TouchableOpacity style={{alignItems:'center', justifyContent:'center', alignItems:'center',}}><FontAwesome5 name="money-bill-alt" size={80} color="green" /><Text style={{color:'green', fontWeight:'bold', fontSize:20,}}>WITHDRAW CASH</Text></TouchableOpacity></View>
	<View style={styles.sqr}><TouchableOpacity style={{alignItems:'center', justifyContent:'center', alignItems:'center',}}><MaterialIcons name="local-atm" size={80} color="blue" /><Text style={{color:'blue', fontWeight:'bold', fontSize:20,}}>Change Pin </Text></TouchableOpacity></View>
	</View>
	<View style={{justifyContent:'space-around',}}>
	<View style={styles.sqr}><TouchableOpacity style={{alignItems:'center', justifyContent:'center', alignItems:'center',}}><FontAwesome5 name="money-bill-alt" size={80} color="green" /><Text style={{color:'green', fontWeight:'bold', fontSize:20,}}>WITHDRAW CASH</Text></TouchableOpacity></View>
	<View style={styles.sqr}><TouchableOpacity style={{alignItems:'center', justifyContent:'center', alignItems:'center',}}><FontAwesome5 name="money-bill-alt" size={80} color="green" /><Text style={{color:'green', fontWeight:'bold', fontSize:20,}}>WITHDRAW CASH</Text></TouchableOpacity></View>
	</View>
	</ImageBackground>
	</SafeAreaView>






	</ImageBackground>


)
}

const h =Dimensions.get('window').height;
const w =Dimensions.get('window').width;


const styles= StyleSheet.create({
	container: {
	flex:1,
    backgroundColor: '#fff',
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
 	 },

  headertext:{
  	fontSize:60,
  	fontWeight:'bold',
  	color:'#ffa700',
  },
  subtext1:{
  	fontSize:50,
  	justifyContent:'center',
  	fontWeight:'bold',
  	color:'yellow',
  },
  subtext2:{
  	fontSize:30,
  	justifyContent:'center',
  	fontWeight:'bold',
  	justifyContent:'center',
  	color:'aqua',
  },

  card:{
  	height:h/2,
  	width:w,
  	marginTop:h/2,
  	borderWidth:5,
  	backgroundColor:'#fff',
  	borderColor:"#CCCCCC",
  	overflow:'hidden',
  	position:'absolute',
  	flexDirection:'column',
  },

  img:{
  	height:h/2,
  	width:w,
  	overflow:'hidden',
  	flexDirection:'row',
  	justifyContent:'space-around'

  },

  headerback:{
  	overflow:'hidden',
  	justifyContent:'center',
  	marginTop:h*.04,

  },

  sqr:{
  	height:h/4 -20,
  	width:h/4 -20,
  	backgroundColor:'#EFC050',
  }


});
