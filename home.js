import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView, View, ImageBackground, TouchableOpacity, Dimensions, Share} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Network from 'expo-network';





export default function Home({navigation}){
	const [location, setLocation] = useState('not transmitted');
	const [errorMsg, setErrorMsg] = useState(null);
	const [ipadd, setip] = useState('192.168.29.161');

	

	// Location Api

	useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
   	 })();
  		}, []);


	let lg = 'Waiting..';
	let lt = 'Waiting..';
	let alt = 'Waiting..';
 	if (errorMsg) {
    text = errorMsg;
  	} else if (location) {
  	if(location.coords){
    lg = JSON.stringify(location.coords.longitude);
    lt = JSON.stringify(location.coords.latitude);
    alt =JSON.stringify(location.coords.altitude);
}
}


async() =>{ 
	let ip = await Network.getIpAddressAsync();
	setip(ip);
}

  // Share option Api

const onShare = async () => {
    
try {
  const result = await Share.share({message:'longitude:' + lg + '\n' + 'latitude:' + lt + '\n' + 'Altitude:' + alt + '\n' + 'IP-Address:' + ipadd,});
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } 
        else {
        }
      }else if (result.action === Share.dismissedAction) {
      }
    } 

    catch(error){
      alert(error.message);
    }
  }

























// Navigating options:-

	function gotocontact(){
	navigation.navigate('closelist');
	}
	function gotomarket(){
		navigation.navigate('cryptomrk');
	}
	function exit(){
		navigation.navigate('index');
	}

	function home()
	{
		console.log(location)
	navigation.navigate('Home');
	}

	function gotowallet()
	{
	navigation.navigate('wallet');
	}






return(
	<ImageBackground source={require('./image/homeback.png')} style={styles.container}>
	<SafeAreaView style={styles.head}>
	<Text style={styles.headertext}>Locate</Text>
	</SafeAreaView>	



	<SafeAreaView style={styles.card}>
	<View style={{alignItems:'center',}}>
		<Text style={{color:"#DD4124", fontSize:40, fontWeight:'bold',}}>Coordinates:</Text>
	</View>
	<View style={{marginTop:20,}}>
		<Text style={{color:"#45B8AC", fontSize:20, fontWeight:'bold'}}>Longitude -> <Text style={{color:'#D65076'}}>{lg}</Text></Text>
	</View>
	<View style={{marginTop:20,}}>
		<Text style={{color:"#45B8AC", fontSize:20, fontWeight:'bold'}}>Latitude -> <Text style={{color:'#D65076'}}>{lt}</Text></Text>
	</View>
	<View style={{marginTop:20,}}>
		<Text style={{color:"#45B8AC", fontSize:20, fontWeight:'bold'}}>Altitude -> <Text style={{color:'#D65076'}}>{alt}</Text></Text>
	</View>

	<View style={{marginTop:20,}}>
		<Text style={{color:"#45B8AC", fontSize:20, fontWeight:'bold'}}>Ip Address:- -> <Text style={{color:'#D65076'}}>{ipadd}</Text></Text>
	</View>

	<View style={styles.sharebut}>
	<TouchableOpacity onPress={onShare}>
	<Text>
	<FontAwesome5 name="share" size={40} color="#fff" />
	<Text style={{color:"#fff", fontSize:40,}}> Share </Text>
	</Text>
	</TouchableOpacity>
	</View>


	</SafeAreaView>


	

	
	
	<SafeAreaView style={styles.footab}>
	<View style={styles.tab}>
	<Text><TouchableOpacity style={styles.tabelem} onPress={gotomarket}><FontAwesome name="bitcoin" size={40} color="#FFCC66" /><Text style={{color:'#FFCC66', fontWeight:'bold',}}>Crypto</Text></TouchableOpacity></Text>
	<Text><TouchableOpacity style={styles.tabelem} onPress={gotowallet}><AntDesign name="wallet" size={40} color="#955251" /><Text style={{color:'#955251', fontWeight:'bold',}}>T-Wallet</Text></TouchableOpacity></Text>
	<Text><TouchableOpacity style={styles.tabelem} onPress={gotocontact}><AntDesign name="contacts" size={40} color="#1e90ff" /><Text style={{color:'#1e90ff', fontWeight:'bold',}}>Contact</Text></TouchableOpacity></Text>
	<Text><TouchableOpacity style={styles.tabelem} onPress={exit}><Ionicons name="log-out-outline" size={40} color="#5B5EA6" /><Text style={{color:'#5B5EA6', fontWeight:'bold',}}>Log Out</Text></TouchableOpacity></Text>
	
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
  	alignItems:'center',
  	justifyContent:'center',
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
  	backgroundColor:"#45B8AC",
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
  	backgroundColor:"#EFC050",
  	borderRadius:24,

  },

  sharebut:{
  	marginTop:35,
  	borderWidth:4,
  	height:60,
  	justifyContent:'center',
  	alignItems:'center',
  	width:w- 200,
  	backgroundColor:'#7DF9FF',
  	borderColor:'#fff',
  	borderRadius:60,

  }

  });
