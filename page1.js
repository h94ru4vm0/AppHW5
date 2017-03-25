import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image,StatusBar } from 'react-native';

const page1 = () => {
    const{picture,background}=styles;

    return(

        <View style = { background }>
        <StatusBar hidden={true} />
        <Image source={ require('./src/Asset/logo_twitch.png') }
               style = { picture } />
        </View>
    );
};

const styles = {
    picture: {
        width: 210,
        height: 100,
    },
    background: {
      backgroundColor: 'rgb(100,65,165)',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }
};

export default page1;
