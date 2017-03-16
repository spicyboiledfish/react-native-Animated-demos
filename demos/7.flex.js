/**
 * Created by ruiwang on 17/2/27.
 */
import React, {Component} from 'react'
import { View } from 'react-native'

export default class Flex extends Component{
    render(){
        return(
            <View style={{width:300,height:500}}>
                <View style={{flex:1,backgroundColor:'powderblue'}}></View>
                <View style={{flex:2,backgroundColor:'skyblue'}}></View>
                <View style={{flex:3,backgroundColor:'steelblue'}}></View>
            </View>
        );
    }
}