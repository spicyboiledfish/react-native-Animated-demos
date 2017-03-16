/**
 * Created by ruiwang on 17/2/24.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Blin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText:true    //初始化声明并定义变量showText的值为true,意思是设置默认文字是显示的
        }
        clearTimeout(timer);
        let timer= setInterval(()=>{
            this.setState({showText:!this.state.showText});
        },1000);
    }
    render(){
        let display=this.state.showText ? this.props.text : ' ';
        return(
            <Text>{display}</Text>
        );
    }
}

export default class BlinApp extends Component{
    render(){
        return(
            <View style={{margin:80}}>
                <Blin text="Congratulations!" />
                <Blin text="You are hired by alibaba!!!" />
                <Blin text="And 16 pay for every year with 20K+." />
            </View>
        );
    }
}