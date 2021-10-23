import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Alert, Dimensions, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function Closelist(){
	const [old_data, new_data] = useState([
      {name:'JACk PARKER ', number:'0001010011', key:'1'},
      {name:'William DANE', number:'0001010011', key:'2'},
      {name:'Rick SCCHEZ', number:'0001010011', key:'3'},
      {name:'Doctor DOOM ', number:'0001010011', key:'4'},
      {name:'Harry Hofs', number:'0001010011', key:'5'}
      ]);

	function deleteF(key){
		console.log(key);
		Alert.alert('REMOVE FROM CLOSE FRIEND','Are you sure you want to remove him/her from close friend',[{text:'No, keep it'},{text:'Yes', onPress:()=>{
			new_data((prevdata)=>{
			return prevdata.filter(data=> data.key != key);
		})
		}
	}]);
		
	}

	function infoedit(){
		console.log("wnanna edit");

	}

	function infodelete(){
		console.log("wanna delete");

	}
	function editF(){
		console.log("EDIT");

	}


	return(
		
		<ImageBackground source={require('./image/Cback.png')} style={styles.container}>
		<View style={styles.header}>
			<Text style={styles.headertittle}>Close Friend List</Text>
		</View>
		<FlatList
		data={old_data}
		renderItem={({item}) => (
			<View style={styles.border}>
			<ImageBackground source={require('./image/tbutt.png')} style={styles.listitem}>
			<Text style={styles.name}>{item.name}</Text>
			<TouchableOpacity activeOpacity={0.2} style={styles.icon} onPress={editF} onLongPress={infoedit}>
				<AntDesign name="edit" size={30} color="black" style={styles.icons} />
				<Text>Edit</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.icon2} onLongPress={infodelete} onPress={()=>deleteF(item.key)}>	
				<MaterialCommunityIcons name="delete-variant" size={30} color="black" />
				<Text>delete</Text>
			</TouchableOpacity>
			</ImageBackground>
			</View>
		)}/>
		<View>
		<TouchableOpacity activeOpacity={0.5} style={styles.create}>
		<AntDesign name="adduser" size={40} color="red"/>
		<Text>Add New</Text>
		</TouchableOpacity>
		</View>
		</ImageBackground>
	
		)
}


	const styles=StyleSheet.create({
		container:{
			alignItems:'center',
			justifyContent:'center',
			flexDirection:'column',
			marginTop:0,
			flex:1,
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
			flex:4,
		},

		number:{
			fontWeight:'bold',
			fontSize:20,
			color:'#fff',
			flex:1,
		},

		header:{
			height:60,
			width:Dimensions.get('window').width,
			borderRadius:3,
			marginBottom:30,
			alignItems:'center',
			fontWeight:'bold',
			paddingTop:6,
			marginTop:40,
		},

		headertittle:{
			fontSize:50,
			color:'#fff',

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
