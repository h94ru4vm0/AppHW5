import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';

const Container =()=>{
    const{Containerbg,pic1,pic2}=styles;

    return(
        <View style={Containerbg}>
            <Image source={require('../../src/Asset/img_firebat.png')}
                   style={pic1} />
            <Image source={require('../../src/Asset/img_forsen.png')}
                   style={pic1} />
            <Image source={require('../../src/Asset/img_kolento.png')}
                   style={pic2} />
        </View>

    );
};

const styles = {
    Containerbg:{
        width:375,
        height:667,
        backgroundColor:'rgb(241,241,241)',
        flexDirection:'column',
        alignItems:'center',

    },
    pic1:{
        width:365,
        height:200,
        marginTop:5,
        marginLeft:4.5,
    },
    pic2:{
        width:365,
        height:144,
        marginTop:5,
        marginLeft:4.5,
    },

};

export default Container;
