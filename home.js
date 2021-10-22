import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export default function Home({navigation}){






return(
	<ImageBackground source={require('./image/homeback.png')} style={styles.container}>
	<SafeAreaView style={styles.head}>
	<TouchableOpacity style={styles.icn} onPress={()=>navbar(1)}>
	<SimpleLineIcons name="menu" size={40} color="black" />
	</TouchableOpacity>
	<Text style={styles.headertext}>Locate</Text>
	</SafeAreaView>	
	
	<SafeAreaView style={styles.home}>
	<Text><TouchableOpacity onPress={()=>navbar(1)}><AntDesign name="home" size={60} color="#1e90ff" /></TouchableOpacity></Text>
	</SafeAreaView>
	<SafeAreaView style={styles.footab}>
	<View style={styles.tab}>
	<Text><TouchableOpacity style={styles.tabelem}><FontAwesome name="bitcoin" size={40} color="#FFCC66" /><Text style={{color:'#1e90ff',}}>Crypto</Text></TouchableOpacity></Text>
	<Text><TouchableOpacity style={styles.tabelem}><AntDesign name="wallet" size={40} color="#1e90ff" /><Text style={{color:'#1e90ff',}}>T-Wallet</Text></TouchableOpacity></Text>
	<Text style={{color:'#1e90ff',}}>HOME</Text>
	<Text><TouchableOpacity style={styles.tabelem}><AntDesign name="contacts" size={40} color="#1e90ff" /><Text style={{color:'#1e90ff',}}>Contact</Text></TouchableOpacity></Text>
	<Text><TouchableOpacity style={styles.tabelem}><AntDesign name="setting" size={40} color="#1e90ff" /><Text style={{color:'#1e90ff',}}>Settings</Text></TouchableOpacity></Text>
	
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
  });
