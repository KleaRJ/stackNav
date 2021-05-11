import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };





  return (

    
    
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://tutorialscapital.com/wp-content/uploads/2017/11/hamburger.png'}}
          style={{
            width: 25,
            height: 25,
            marginRight: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
    

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#a7e5ff', //Set Header color
            },
            headerTintColor: '#5f2232', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
     



  );
}


function secondScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="About">
        <Stack.Screen
          name="About"
          component={About}
          options={{
            title: 'About', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#a7e5ff', //Set Header color
            },
            headerTintColor: '#5f2232', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function thirdScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'Products', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#a7e5ff', //Set Header color
            },
            headerTintColor: '#5f2232', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function fourthScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Services">
        <Stack.Screen
          name="Services"
          component={Services}
          options={{
            title: 'Services', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#a7e5ff', //Set Header color
            },
            headerTintColor: '#5f2232', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}

function fifthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Portfolio"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#a7e5ff', //Set Header color
        },
        headerTintColor: '#5f2232', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About', //Set Header Title
          
        }}/>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: 'Products', //Set Header Title
        }}/>

<Stack.Screen
name="Services"
component={Services}
options={{
  title: 'Services', //Set Header Title
}}/>

<Stack.Screen
name="Portfolio"
component={Portfolio}
options={{
  title: 'Portfolio', //Set Header Title
}}/>
</Stack.Navigator>
  
  );
}

function App() {

  
  return (
    <NavigationContainer>
      <Drawer.Navigator
     // drawerPosition="right"
     //a drawerStyle={{backgroundColor: '#fff', width: 260}}
        drawerContentOptions={{
          activeTintColor: '#e7d0c0',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="About"
          options={{ drawerLabel: 'About' }}
          component={secondScreenStack} />
          <Drawer.Screen
          name="Products"
          options={{ drawerLabel: 'Products' }}
          component={thirdScreenStack} />
          <Drawer.Screen
          name="Services"
          options={{ drawerLabel: 'Services' }}
          component={fourthScreenStack} />
          <Drawer.Screen
          name="Portfolio"
          options={{ drawerLabel: 'Portfolio' }}
          component={fifthScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;