import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';

const Sixpic =()=>{
    const{Sixpicbg,pic1}=styles;

    return(
        <View style={Sixpicbg}>
            <View>
                   <Image source={require('../../src/Asset/img_leagueoflegends.png')} 
                   style={pic1} />
                   <Image source={require('../../src/Asset/img_hearthstone.png')} 
                   style={pic1} />
                   <Image source={require('../../src/Asset/img_h1z1.png')} 
                   style={pic1} />
            </View>
            <View>    
                   <Image source={require('../../src/Asset/img_counterstrike.png')} 
                   style={pic1} />
                   <Image source={require('../../src/Asset/img_dota2.png')} 
                   style={pic1} />
                   <Image source={require('../../src/Asset/img_destiny.png')} 
                   style={pic1} />
            </View>
        </View>
    );
};

const styles = {
    Sixpicbg:{
        width:375,
        height:554,
        backgroundColor:'rgb(241,241,241)',
        flexDirection:'row',
    },
    pic1:{
        width:180,
        height:180,
        marginTop:5,
        marginLeft:5,
    },
};

export default Sixpic;