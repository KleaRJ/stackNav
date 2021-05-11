import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';



const About = ({ navigation }) => {
  return (

    
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>

        
      
        <View
          style={{
            flex: 1,
            alignItems: 'right',
            justifyContent: 'right',
          }}>
          
          <Button
            onPress={
              () => navigation.navigate('home')
            }
            title="Home"
          />
          <Button
            onPress={
              () => navigation.navigate('Products')
            }
            title="Products"
          />
          <Button
            onPress={
              () => navigation.navigate('Services')
            }
            title="Services"
          />
          <Button
            onPress={
              () => navigation.navigate('Portfolio')
            }
            title="Portfolio"
          />
        </View>



     
        <View>
        <View style={styles.container}>
       
       
        <View style={styles.content}>

            <Text style={styles.head}>First Page</Text>
                <Text style={styles.bodyText}> Home Page - version of the template</Text>
             
            <Text style={styles.head}>Second Page</Text>
            <Text style={styles.bodyText}> About Page - description of the template</Text>
            
            <Text style={styles.head}>Third Page</Text>
            <Text style={styles.bodyText}> Image Background 1 </Text>
            

            <Text style={styles.head}>Fourth Page</Text>
            <Text style={styles.bodyText}> Image Background 2 </Text>
            
            <Text style={styles.head}>Fifth Page</Text>
            <Text style={styles.bodyText}> Image Background 3 </Text>

        
            
        </View>
     
        </View>
    
    </View>

    </View>    
      </View>

    









  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header:{
    flexDirection: 'row',
    marginTop: 10,
    
  },
  headTitle:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    

  },
  txt1:{
    fontSize: 35, 
    fontWeight: 'bold',
    color:'#2A64A6',

  },
  txt2:{
    fontSize: 35, 
    fontWeight: 'bold',
    color:'#0C2745',
  },


 
  bodyBorder:{
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    borderWidth: '4@s',
    marginTop: '15@mvs',
    marginBottom: 10,
    borderColor: '#fff'
    
  },

  head:{
    fontWeight: 'bold',
    fontSize: '20@mvs0.5',
    color: '#1C3E83',
    marginBottom: 10
  },
  bodyText: {
    fontSize: '14@mvs0.5',
    marginTop: 5, 
    marginBottom: 20, 
    lineHeight: '25@mvs0.2',
  },
  
});

export default About;