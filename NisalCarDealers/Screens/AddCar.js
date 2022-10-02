import { View, Text,ImageBackground,StyleSheet,ScrollView, SafeAreaView,TextInput,TouchableOpacity } from 'react-native'
import {  NativeBaseProvider,VStack,Input, Flex,Button } from 'native-base';
import React ,{useState} from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { HStack } from 'native-base';

import DatePicker from 'react-native-date-picker'


export default function AddCar() {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    // <ScrollView  style={style.scrollView}>
      
    <ImageBackground source={require('../assets/car2.jpg')} resizeMode="cover" style={style.image}  >
      <ScrollView  style={style.scrollView}>
        {/* <View style={style.form}>  */}
            <NativeBaseProvider>
                    <VStack space={7}  w="75%" maxW="300px" mx="auto" mt="20%" style={{alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'gray',fontWeight:'bold',fontSize:40, textShadowColor: 'rgba(0, 0, 0, 0.8)', textShadowOffset: {width: -3, height: 1},textShadowRadius: 5}}>Add Car</Text>
                      <Input type='text' style={{ borderWidth:1,borderColor:'black'}} size="md" placeholder="Reg No"  />
                      <View style={{width:'100%',height:'100%',flex:1,flexDirection:'row'}}>
                      <Flex style={style.imagepicker1}>
                        <Input 
                        type='text' 
                        style={{ borderWidth:1,borderColor:'black'}} 
                        size="md" 
                        placeholder="date"  />
                        </Flex>
                        <Flex  
                        style={style.imagepicker1} 
                        flexDirection='row'>
                           
                           <Button 
                           style={{width:'100%',height:48,backgroundColor:'#595959c0',alignItems:'center',justifyContent:'center'}} 
                           title="Open" 
                           onPress={() => setOpen(true)} 
                           variant='subtle' > 
                            <Text style={{color:'white',fontWeight:'bold'}}>Date</Text>
                            </Button>
                          <DatePicker
                            modal
                            open={open}
                            date={date}
                            onConfirm={(date) => {
                              setOpen(false)
                              setDate(date)
                            }}
                            onCancel={() => {
                              setOpen(false)
                            }}/>
                           
                           </Flex>
                      
                        
                        </View>
                        <Input type='text' style={{ borderWidth:1,borderColor:'black'}} size="md" placeholder="Location"  />                       

                      <TextInput
                            multiline={true}
                            numberOfLines={5}
                            placeholder="Description"
                            style={{width:'100%' ,heigth:20, textAlignVertical: 'top',borderWidth:1,borderColor:'black'}}/>
                            
                     <View style={{width:'100%',height:'100%',flex:1,flexDirection:'row'}}>
                   
                        <Flex style={style.imagepicker1}>
                        <Input type='text' style={{ borderWidth:1,borderColor:'black'}} size="md" placeholder="url"  />
                        </Flex>
                        <Flex  style={style.imagepicker1} flexDirection='row'>
                          
                           <Flex style={{width:'100%',height:'100%',marginLeft:'1%'}}>
                             <Button  
                                style={{height:48,backgroundColor:'#595959c0',alignItems:'center',justifyContent:'center'}}
                                variant='outline'
                                onPress={async(e)=>{
      
                                  const result = await launchImageLibrary(
                                    mediaType='photo'
                                  );
                                 }}
                                
                                > 
                                <Text style={{color:'white',fontWeight:'bold'}}>Upload Image</Text>
                                </Button>
                            
                           </Flex>
                        </Flex>
                     </View>
                     <View style={{width:'100%'}}>
                          <HStack  space={3}  w="75%" maxW="300px" mx="auto" style={{alignItems:'center',justifyContent:'center'}}>

                          <TouchableOpacity style={style.btn}  >
                            <Text style={{fontWeight:'bold',color:'white',fontSize:20}}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnU}  >
                            <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btnD}  >
                            <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Delete</Text>
                        </TouchableOpacity>
                          </HStack>
                     </View>
                     {/* <View style={{width:'100%',backgroundColor:'red'}}>

                       
                     </View>
                     <View style={{width:'100%',backgroundColor:'red'}}>
                    
                       
                     </View> */}
                      
                    </VStack>   
            </NativeBaseProvider>
        {/* </View> */}
        </ScrollView>
    </ImageBackground>
    // </ScrollView>
   
  )
}
const style=StyleSheet.create({
    container:{
        flex:1
    },
    image: {
      flex: 1,
      
      alignItems:'center',
      width:'100%',
      height:'100%'
    },
    form:{
        position:'absolute',     
        marginTop:'10%',  
        height:700,
        backgroundColor: "#FFFFFF",
        borderWidth:1,
        borderRadius:10,
        width:'95%',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 9,
    },
    scrollView: {
       backgroundColor: 'white',
       width:'90%',
        marginHorizontal: 20,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 9,
      },
      imagepicker1:{
        // flex:2,
        // display:'flex',
        // flexDirection:"column",
        width:'50%',
        height:'10%',
        //backgroundColor:'red'

      },
      imagepicker2:{
      //  flex:2,
        // display:'flex',
        //flexDirection:"column",
        width:'50%',
        height:'10%',
        backgroundColor: 'blue',
      },
      btn:{
        alignItems:'center',
        justifyContent:'center',
        
        width:'40%',
        height:50,
        backgroundColor:'#0017ADc0',
        borderRadius:10
        
    },
    btnD:{
      alignItems:'center',
      justifyContent:'center',
      
      width:'40%',
      height:50,
      backgroundColor:'#75090Ec0',
      borderRadius:10
     
     
      
  },
  btnU:{
    alignItems:'center',
    justifyContent:'center',
    
    width:'40%',
    height:50,
    backgroundColor:'#006833c0',
    borderRadius:10
   
   
    
},
})