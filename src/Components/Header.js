import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';

const Header =()=>{
    const{headerbg,arrowstyle,textstyle,heartstyle}=styles;

    return(
        <View style={headerbg}>
            <Image source={require('../Asset/btn_back.png')} 
                   style={arrowstyle} />
            <Text style={textstyle}>Hearthstone</Text>
            <Image source={require('../Asset/btn_like.png')} 
                   style={heartstyle} />
        </View>
    );
};

const styles = {
    headerbg:{
        width:375,
        height:64,
        backgroundColor: 'rgb(100,65,165)',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    arrowstyle:{
        width:33,
        height:33,
        marginTop:25,
    },
    textstyle:{
        color:'#fff',
        fontSize:18,
        marginTop:30.5,
    },
    heartstyle:{
        width:33,
        height:33,
        marginTop:25,
    },
    
};

export default Header;