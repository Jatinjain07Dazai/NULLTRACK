import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
export default function Home({navigation}){






return(
	<ImageBackground source={require('./image/homeback.png')} style={styles.container}>
	<SafeAreaView style={styles.head}>
	<TouchableOpacity style={styles.icn} onPress={()=>navbar(1)}>
	<SimpleLineIcons name="menu" size={40} color="black" />
	</TouchableOpacity>
	<Text style={styles.headertext}>Locate</Text>
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
  });
