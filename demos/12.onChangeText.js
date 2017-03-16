/**
 * Created by ruiwang on 17/3/1.
 */
import React, {Component} from 'react'
import { View, TextInput} from 'react-native'

export default class OnChangeText extends Component{
    constructor(props) {
        super(props)
        this.state = {text: 'Useless Placeholder!'}
    }
    render(){
        return(

                <TextInput style={{height:40,borderColor:'yellowgreen',borderWidth:1,padding:10,margin:10}}
                            onChangeText={(text)=>this.setState({text})}
                            multiline={false}
                            value={this.state.text} />
        );
    }
}