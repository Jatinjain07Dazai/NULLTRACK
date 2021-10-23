import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, View, ImageBackground, TouchableOpacity, Dimensions, FlatList} from 'react-native';

//using
import { FontAwesome5 } from '@expo/vector-icons';


export default function Crypto({navigation}){



	const [coin_data, change_data] = useState([
      {name:'Bitcoin', number:'0', key:'1'},
      {name:'Ethereum', number:'0', key:'2'},
      {name:'Terra', number:'0', key:'3'},
      {name:'Chainlink', number:'0', key:'4'},
      {name:'Lite Coin', number:'0', key:'5'},
      {name:'Doge coin', number:'0', key:'6'},
      {name:'J coin', number:'0', key:'7'}
      ]);








return(
	<ImageBackground source={require('./image/crypto.jpg')} style={styles.container}>
	<SafeAreaView style={styles.header}>
	<FontAwesome5 name="bitcoin" size={60} color="black" />
	<Text style={{fontSize:40, color:'#FFCC66', fontWeight:'bold',}}> Crypto Market</Text>
	</SafeAreaView>



	<FlatList
		data={coin_data}
		renderItem={({item}) => (
			<View style={{ marginTop:14, marginLeft:15,}}>
			<ImageBackground source={require('./image/tbutt.png')} style={styles.listitem}>
			<Text style={styles.name}>{item.name}</Text>
			<TouchableOpacity activeOpacity={0.2} style={styles.icon}>
				<Text style={{fontSize:30, color:'green', fontWeight:'bold',}}>Buy</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.icon2}>	
				<Text style={{fontSize:30, color:'red', fontWeight:'bold',}}>Sell</Text>
			</TouchableOpacity>
			</ImageBackground>
			</View>
		)}/>



























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
    position:'absolute',
  },
  header:{
  	flexDirection:'row',
  	marginLeft:25,
  	marginTop:25,
  	},

	listitem:{
			height:80,
			width:360,
			flexDirection:'row',
			justifyContent:'space-around',
			alignItems:'flex-start',
			overflow:'hidden',
			borderRadius:40,
			borderColor:'#fff',
			borderWidth:4,
			marginBottom:30,

		},

	name:{
			paddingLeft:20,
			fontSize:30,
			fontWeight:'bold',
			color:"#fff",
			marginTop:15,
			flex:3,
		},

	number:{
			fontWeight:'bold',
			fontSize:20,
			color:'#fff',
			flex:1,
		},

	icon:{
			flex:1,
			marginTop:15,

		},

		icon2:{
			flex:1,
			marginTop:15,
		},

		create:{
			height:60,
			width:60,
		}



});
