import React  from 'react';
import { View, Text, StyleSheet,Button,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem'



function Home({navigation}) { 
    return (
       <>
          <View style={styles.topView}>
                <TouchableOpacity  style={ styles.touchBackground}   
                      onPress= {() => navigation.navigate('Home')}  >
                          <View style={styles.buttonView} >
                              <Text style={styles.buttonText}> Enviar Pendências </Text>
                          </View>
                  </TouchableOpacity >
                  
                  <TouchableOpacity  style={ styles.touchBackground}   
                      onPress= {() => navigation.navigate('NovoPonto')}  >
                          <View style={styles.buttonView} >
                              <Text style={styles.buttonText}> Marcar Ponto </Text>
                          </View>
                  </TouchableOpacity >

              </View>
              
          <ScrollView style={styles.scrollView} 
          contentContainerStyle={styles.itemPostion} >
                
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/> 
              <ListItem/>
              <ListItem/>
              <ListItem/>

          </ScrollView>

        </>
    );
  }


const styles =  StyleSheet.create ({
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
itemPostion: {
  justifyContent:'center',
  alignItems: 'center',
  margin: 3,
},
topView: {
  flexDirection: 'row',
  justifyContent:'space-around',
  alignItems: 'center',
  marginBottom: 15,
  backgroundColor:'#fff'
},
buttonText:{
  color:'#fff'
},
buttonView: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#29f',
  margin: 30,
  padding: 7,
  height: 40,
  width:'100%',
  borderRadius: 20,
},
touchBackground: {
  marginTop: 35,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000',
  width: '40%',
  height: 40,
  borderRadius: 20,

},

})
 
export default Home