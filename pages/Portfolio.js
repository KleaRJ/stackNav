import * as React from 'react';
import {
  Button,
  View,
  Image,} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const Portfolio = ({ navigation }) => {
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
              () => navigation.navigate('Home')
            }
            title="Home"
          />

<Button
            onPress={
              () => navigation.navigate('About')
            }
            title="About"
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


          
        </View>



     
        <View>
        
    <Image
     style={{
       flex: 1,
       width:'90%',
       height:400,
     }}
     source={{uri: 'https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg'}}/>
    </View>  

    


        </View>


    </View>  
    

     );
}



export default Portfolio;