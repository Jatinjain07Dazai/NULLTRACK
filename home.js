import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



export default function Home({navigation}){

	function gotocontact(){
	navigation.navigate('closelist');
	}
	function gotomarket(){
		navigation.navigate('cryptomrk');
	}
	function exit(){
		navigation.navigate('index');
	}






return(
	<ImageBackground source={require('./image/homeback.png')} style={styles.container}>
	<SafeAreaView style={styles.head}>
	<TouchableOpacity style={styles.icn} onPress={()=>navbar(1)}>
	<SimpleLineIcons name="menu" size={40} color="black" />
	</TouchableOpacity>
	<Text style={styles.headertext}>Locate</Text>
	</SafeAreaView>	



	<SafeAreaView style={styles.card}>
	<View style={{alignItems:'center',}}>
		<Text style={{color:"red", fontSize:40,}}>Coordinates:</Text>
	</View>
	<View style={{marginTop:20,}}>
		<Text style={{color:"green", fontSize:30,}}>Longitude::</Text>
	</View>
	<View style={{marginTop:20,}}>
		<Text style={{color:"green", fontSize:30,}}>Latitude::</Text>
	</View>
	</SafeAreaView>


	

	
	<SafeAreaView style={styles.home}>
	<Text><TouchableOpacity onPress={()=>navbar(1)}><AntDesign name="home" size={60} color="#1e90ff" /></TouchableOpacity></Text>
	</SafeAreaView>
	<SafeAreaView style={styles.footab}>
	<View style={styles.tab}>
	<Text><TouchableOpacity style={styles.tabelem} onPress={gotomarket}><FontAwesome name="bitcoin" size={40} color="#FFCC66" /><Text style={{color:'#1e90ff',}}>Crypto</Text></TouchableOpacity></Text>
	<Text><TouchableOpacity style={styles.tabelem}><AntDesign name="wallet" size={40} color="#1e90ff" /><Text style={{color:'#1e90ff',}}>T-Wallet</Text></TouchableOpacity></Text>
	<Text style={{color:'#1e90ff',}}>HOME</Text>
	<Text><TouchableOpacity style={styles.tabelem} onPress={gotocontact}><AntDesign name="contacts" size={40} color="#1e90ff" /><Text style={{color:'#1e90ff',}}>Contact</Text></TouchableOpacity></Text>
	<Text><TouchableOpacity style={styles.tabelem}><Ionicons name="log-out-outline" size={40} color="#1e90ff" /><Text style={{color:'#1e90ff',}}>Log Out</Text></TouchableOpacity></Text>
	
	</View>
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
  head:{
  	marginTop:30,
  	height:80,
  	flexDirection:'row',
  },

  headertext:{
  	fontSize:60,
  	fontWeight:'bold',
  	color:'#ff5c5c',
  },
  icn:{
  	marginLeft:20,
  	justifyContent:'center',
  	marginRight:40,
  },
  footab:{
  	height:70,
  	width:Dimensions.get('window').width -30,
  	backgroundColor:"#fff",
  	borderRadius:30,
  	marginTop:h*.89,
  	marginLeft:w*.04,
  	borderWidth:3,
  	borderColor:"#edece1",
  	position:'absolute',
  },

  tab:{
  	borderColor:"#000",
  	flexDirection:'row',
  	justifyContent:'space-around',
  	paddingTop:4,
  },


  home:{
  	position:'absolute',
  	marginTop:Dimensions.get('window').height -156,
  	marginLeft:Dimensions.get('window').width/2 -35,
  	borderRadius:50,
  	borderWidth:3,
  	backgroundColor:"#fff",
  	borderColor:"#edece1",
  },
	
   card:{
  	marginLeft:20,
  	marginTop:40,
  	height:Dimensions.get('window').height -350,
  	width:Dimensions.get('window').width - 40,
  	borderWidth:8,
  	borderColor:"#F5F5F5",
  	alignItems:'center',
  	backgroundColor:"#fff",
  	borderRadius:24,

  },

  });
