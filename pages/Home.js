import * as React from 'react';
import {
  Button,
  View,
  Text,
  Image,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';



const Home = ({ navigation }) => {
  const pic1 = { uri:"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg"}
  const pic2 = { uri:"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image2.jpg"}
  const pic3 = { uri:"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg"}
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
          <Button
            onPress={
              () => navigation.navigate('Portfolio')
            }
            title="Portfolio"
          />
        </View>



     
        <View>
        <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headTitle}>
            <Text style={styles.txt1}>Landscape</Text>
            <Text style={styles.txt2}>Titles</Text>
          </View>
        </View>
       
        <View style={styles.content}>
        <Image source={pic1} style={styles.picture}/>

            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
             
                <Image source={pic2} style={styles.picture}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
            
                <Image source={pic3} style={styles.picture}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
            

                <Image source={pic1} style={styles.picture}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
            
                <Image source={pic2} style={styles.picture}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>

                <Image source={pic3} style={styles.picture}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
            
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

  picture: {
    width: 750,
    height: 200,
    resizeMode: "stretch",
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

export default Home;