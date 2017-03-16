/**
 * Created by ruiwang on 17/3/7.
 */
import React, {Component} from 'react'
import {View,Text } from 'react-native'

export default class MyScene extends Component{
    static defaultProps = {
        title: 'MyScene'
    };
    render(){
        return(
            <Text style={{paddingTop:100}}>Hi! My name is {this.props.title}.</Text>
        );
    }
}