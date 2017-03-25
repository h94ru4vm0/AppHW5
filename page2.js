import React,{Component} from 'react';
import { AppRegistry,StyleSheet,View,Text,Image,StatusBar } from 'react-native';
import Header from './src/Components/Header';
import Choose from './src/Components/Choose';
import Container from './src/Components/Container';


class page2 extends Component{
     render(){
         return(
         <View>
            <StatusBar barStyle="light-content"/>
            <Header />
            <Choose />
            <Container />
         </View>
         );
     }
}

export default page2;
