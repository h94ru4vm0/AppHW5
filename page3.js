import React,{Component} from 'react';
import { AppRegistry,StyleSheet,View,Text,Image,StatusBar } from 'react-native';
import Search from './src/Components/Search';
import GamesPic from './src/Components/GamesPic';
import Fourlogo from './src/Components/TabBar';


class page3 extends Component{
     render(){
         return(
         <View>
            <StatusBar barStyle="light-content"/>
            <Search />
            <GamesPic />
            <TabBar />
         </View>
         );
     }
}


export default page3;
