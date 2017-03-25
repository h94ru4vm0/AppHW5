import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';

const Search =()=>{
    const{searchbg,searchbar,iconsearch,textstyle,piccast}=styles;

    return(
        <View style={searchbg}>
            <View style={searchbar}>
                  <Image source={require('../Asset/icon_search.png')} 
                         style={iconsearch} />
                  <Text style={textstyle}>Search</Text>
            </View>
            <Image source={require('../Asset/btn_cast.png')} 
                        style={piccast} />
        </View>
    );
};

const styles = {
    searchbg:{
        width:375,
        height:64,
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row',
    },
    searchbar:{
        width:320,
        height:30,
        backgroundColor:'rgb(49,31,83)',
        marginLeft:8.5,
        marginTop:26.5,
        flexDirection:'row',
    },
    textstyle:{
        color:'rgb(185,163,227)',
        fontSize:15,
        marginLeft:8.2,
        marginTop:5,
    },
    iconsearch:{
        width:12.8,
        height:12.8,
        marginLeft:11,
        marginTop:8.5,
    },
    piccast:{
        width:33,
        height:33,
        marginLeft:5,
        marginTop:25,
    },
};

export default Search;