/**
 * Created by ruiwang on 17/2/28.
 */
import React, {Component} from 'react'
import { View } from 'react-native'

export default class FlexDirection extends Component{
    render(){
        return(
            <View style={{flex:1,flexDirection:'column-reverse'}}>
                <View style={{width:50,height:100,backgroundColor:'powderblue'}}></View>
                <View style={{width:50,height:100,backgroundColor:'skyblue'}}></View>
                <View style={{width:50,height:100,backgroundColor:'steelblue'}}></View>
            </View>
        );
    }
}