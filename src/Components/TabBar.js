import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';

const TabBar =()=>{
    const{TabBarbg,PicStyle,CurrentPage,TabPages,ObjSize}=styles;

    return(
        <View style={TabBarbg}>
            <View style={ObjSize}>
                  <Image source={require('../Asset/btn_games_selected.png')}
                         style={PicStyle} />
                <Text style={CurrentPage}>Games</Text>
            </View>
            <View style={ObjSize}>
                  <Image source={require('../Asset/btn_channels.png')}
                         style={PicStyle} />
                  <Text style={TabPages}>Channels</Text>
            </View>
            <View style={ObjSize}>
                  <Image source={require('../Asset/btn_following.png')}
                         style={PicStyle} />
                  <Text style={TabPages}>Following</Text>
            </View>
            <View style={ObjSize}>
                  <Image source={require('../Asset/btn_me.png')}
                         style={PicStyle} />
                  <Text style={TabPages}>Me</Text>
            </View>
        </View>
    );
};

const styles = {
    TabBarbg:{
        width:375,
        height:49,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    ObjSize:{
        width:94,
        height:49,
    },
    CurrentPage:{
        color:'rgb(100,65,165)',
        fontSize:10,
        textAlign:'center',
        marginTop:-15,
    },
    TabPages:{
        color:'rgb(187,187,187)',
        fontSize:10,
        textAlign:'center',
        marginTop:-15,
    },
    PicStyle:{
        width:94,
        height:49,
    },
};

export default TabBar;
