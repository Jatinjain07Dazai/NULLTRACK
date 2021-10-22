import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, Image, Keyboard, TouchableWithoutFeedback, Alert, Dimensions, KeyboardAvoidingView} from 'react-native';
export default function Index({navigation})
{
 
  const [real, update]= useState({username:'peanut', password:'butter', key:'1'})
  const [uname, setuname]= useState('')
  const [pass, setpass]= useState('')
   
  function TexthandlerU(val){       
    setuname(val);
  }
  
   function TexthandlerP(val){       
    setpass(val);
  }
  
  function SubmitHandler(){
    if(uname==real.username && pass==real.password){
      // Alert.alert('Welcome', 'We hope you like our service ♥', [{text:'Ok'}],);
      console.log('Autheticate get in');
    }
    else{
      Alert.alert('Authetication Failed', 
        'It seems you username or password is incorrect', 
        [{text:"Forget password", onPress:()=> console.log("This feature is under produnction")},
        {text:"retry", onPress:()=> console.log("okie dokie !!!!!!")}]);
    }

  }
  
  return(
    <TouchableWithoutFeedback onPress={()=>{
        console.log("screen is touched");
         Keyboard.dismiss();
      }
      }>
  
  <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        
  <Image
   source={require('./images/back.png')}
   style={styles.back}
   resizeMode={'stretch'}
   blurRadius={0}/>
    
    <Image source={require( './image/t.png')}
      style={styles.round} />
     
   <SafeAreaView style={styles.border}>
   <TextInput placeholder="Username" maxLength={30} onChangeText={TexthandlerU} />
   </SafeAreaView>

   <SafeAreaView style={styles.border}>
   <TextInput placeholder="Password" maxLength={30} keyboardType='default' onChangeText={TexthandlerP} secureTextEntry={true} />
   </SafeAreaView>


  </SafeAreaView>
  </TouchableWithoutFeedback>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  );
}

const h =Dimensions.get('window').height;
const w =Dimensions.get('window').width;

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
   back:{
    position:'absolute',
  },
     border:{
    borderWidth:2,
    borderColor:'#fff',
    borderColor:'#fff',
    backgroundColor:'#696969',
    borderRadius:20,
    height:40,
    width:280,
    marginTop:20,
    marginLeft:w*.10,
    alignItems:'center',
  },
  round:{
    height:120,
    width:120,
    borderRadius:200,
    marginLeft:w *.30,
    marginTop:h*.10,
  }
  });





