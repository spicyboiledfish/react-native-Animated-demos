/**
 * Created by ruiwang on 17/2/27.
 */
import React, {Component} from 'react'
import { View } from 'react-native'

export default class Regular extends Component{
    render(){
        return(
            <View>
                <View style={{width:100,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{width:300,height:100,backgroundColor:'skyblue'}}></View>
                <View style={{width:200,height:80,backgroundColor:'steelblue'}}></View>
            </View>
        );
    }
}