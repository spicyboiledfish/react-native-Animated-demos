/**
 * Created by ruiwang on 17/3/15.
 */
import React, {Component} from 'react'
import {View,Animated, LayoutAnimation, TouchableOpacity, Text} from 'react-native'

export default class Animate extends Component{
    constructor(props){
        super(props);
        this.state={
            w: 100,
            h: 100
        }
    }
    componentWillMount(){
        // 创建动画
        LayoutAnimation.spring();
    }
    _onPress() {
        // 让视图的尺寸变化以动画形式展现
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }
    render() {
        return (
            <View style={{flex:1,alignItems:'center',marginTop:50,}}>
                <View style={{
                    width:this.state.w,
                    height: this.state.h,
                    backgroundColor:'red',
                    marginBottom:10
                }} />
                <TouchableOpacity onPress={()=>{this._onPress()}}>
                    <View style={{
                        width:100,
                        height:50,
                        backgroundColor:'skyblue',
                        alignItems:'center',
                    }}>
                        <Text style={{lineHeight:50}}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};