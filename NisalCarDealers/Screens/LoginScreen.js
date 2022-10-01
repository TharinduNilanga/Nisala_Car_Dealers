import { View, Text,ImageBackground ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import {  NativeBaseProvider,VStack,Input, } from 'native-base';

export default function LoginScreen() {
  return (
<NativeBaseProvider>
    <View style={style.container}>
        <ImageBackground source={require('../assets/car2.jpg')} resizeMode="cover" style={style.image}  >
            <View style={style.form}> 
                <VStack space={7}  w="75%" maxW="300px" mx="auto" mt="20%" style={{alignItems:'center',justifyContent:'center'}}>
                    <Input type='text' style={{ borderWidth:1,borderColor:'black'}} size="md" placeholder="email"  />
                    <Input type='password'  style={{borderWidth:1,borderColor:'black'}} size="md" placeholder="password" />
                    <TouchableOpacity style={style.btn}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={style.account}>
                            <Text style={{fontWeight:'bold',color:'black',textDecorationLine:'underline'}}>create new account ?</Text>
                    </TouchableOpacity>
                </VStack>

            </View>

        </ImageBackground>
        {/* <View style={style.form}>

        </View> */}
    </View>
    </NativeBaseProvider>
  )
}
const style = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent:'center',
    //   alignItems:'center'
    },
    image: {
         flex: 1,
        justifyContent: "center",
        alignItems:'center',
        width:'100%',
        height:'30%',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10

    },
    form:{
        position:'absolute',
    //     left:0,
    //     right:0,
    //     top:0,
    //     bottom:0,
    //   margin:'auto',
        
        height:'60%',
        backgroundColor: "#FFFFFF",
        borderWidth:1,
       
        borderRadius:10,
        width:'90%',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 9,
    },
    btn:{
        alignItems:'center',
        justifyContent:'center',
        
        width:'60%',
        height:'20%',
    
        backgroundColor:'#970221',
        borderRadius:10
        
    },
    account:{
   //  marginTop:-10
    }
    
})