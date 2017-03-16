/**
 * Created by ruiwang on 17/3/16.
 */
import React, {Component} from 'react'
import {View,Animated,Image} from 'react-native'

export default class Timing extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgOpacity: new Animated.Value(0)
        }
    }
    componentDidMount(){
        Animated.timing(
            this.state.imgOpacity,{
                toValue:1,
                duration:3000
            }
        ).start();
    }

    render(){
        return(
            <Animated.Image style={{opacity:this.state.imgOpacity,margin:100}}>
                <Image source={require('../images/1.jpg')} style={{width:100,height:100}}/>
            </Animated.Image>
        );
    }
}