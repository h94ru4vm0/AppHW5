import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';

const Choose =()=>{
    const{choosebg,choosebar,textstyle1,textstyle2}=styles;

    return(
        <View>
        <View style={choosebg}>
            <Text style={textstyle1}>LIVE</Text>
            <Text style={textstyle2}>RECENT</Text>
        </View>
        <View style={choosebar}>
        </View>
        </View>
        
    );
};

const styles = {
    choosebg:{
        width:375,
        height:44,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        
    },
    choosebar:{
        width:187.5,
        height:5,
        backgroundColor:'rgb(100,65,165)',
    },
    textstyle1:{
        color:'rgb(100,65,165)',
        fontSize:13,
        marginTop:15,
    },
    textstyle2:{
        color:'rgb(187,187,187)',
        fontSize:13,
        marginTop:15,
    },
    
};

export default Choose;