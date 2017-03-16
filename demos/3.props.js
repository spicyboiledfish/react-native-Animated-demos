/**
 * Created by ruiwang on 17/2/23.
 */
import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Green extends Component {
    render(){
        return(
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

export default class Yellow extends Component {
    render(){
        return(
            <View>
                <Green name="Alice" />
                <Green name="Charles" />
                <Green name="Marry" />
            </View>
        );
    }
}