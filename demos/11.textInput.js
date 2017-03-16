/**
 * Created by ruiwang on 17/3/1.
 */
import React, {Component} from 'react'
import { Text, View, TextInput } from 'react-native'

export default class Pizza extends Component{
    constructor(props){
        super(props);
        this.state={ text:' '};
    }
    render(){
        return(
            <View style={{padding:10}}>
                <TextInput placeholder="Type here to translate!"
                           style={{height:40}}
                           onChangeText={
                                (text)=>this.setState({text})} />
                <Text style={{padding:10,fontSize:42}}>
                    {this.state.text.split(' ').map(
                        (word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}