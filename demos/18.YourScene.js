/**
 * Created by ruiwang on 17/3/7.
 */
import React, {Component, PropTypes} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

export default class YourScene extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack:PropTypes.func.isRequired,
    }
    render(){
        return(
            <View style={{padding:100}}>
                <Text>{this.props.title}</Text>
                <TouchableOpacity onPress={this.props.onForward}>
                    <Text>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onBack}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}