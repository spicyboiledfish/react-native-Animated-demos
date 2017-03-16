/**
 * Created by ruiwang on 17/2/23.
 */
import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class Img extends Component{
    render(){
        let pic={
            uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        return(
            <View style={{alignItems:'center'}} >
                <Image source={pic} style={{width:193, height:110, marginTop:100}} />
            </View>
        );
    }
};