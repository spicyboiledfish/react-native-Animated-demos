/**
 * Created by ruiwang on 17/3/15.
 */
import React, {Component} from 'react';
import {Animated} from 'react-native';

export default class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }
    render() {
        return (
            <Animated.Image                         // 可选的基本组件类型: Image, Text, View
                source={require('../images/1.jpg')}
                style={{
                    width: 100,
                    height: 100,
                    margin:50,
                    transform: [                        // `transform`是一个有序数组（动画按顺序执行）
                        {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
                    ]
                }}
            />
        );
    }
    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
        Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
            this.state.bounceValue,                 // 将`bounceValue`值动画化
            {
                toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // 开始执行动画
    }
}