/**
 * Created by ruiwang on 17/3/1.
 */
import React, {Component} from 'react';
import { View, TextInput } from 'react-native';

class Child extends Component{
    render(){
        return(
            <TextInput
                {...this.props}
                editable={true}
                maxLength={40}
            />
        );
    }
}

export default class Father extends Component{
    constructor(props){
        super(props);
        this.state={text:'Useless Multiline Placeholder',};
    }
    render(){
        return(
            <View style={{
                borderBottomColor:'#000',
                borderBottomWidth:1
            }}>
                <Child multiline={true}
                       numberOfLines={4}
                       onChangeText={(text)=>this.setState({text})}
                       value={this.state.text} />
            </View>
        );
    }
}