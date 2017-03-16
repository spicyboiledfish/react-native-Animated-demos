/**
 * Created by ruiwang on 17/3/7.
 */
import React, {Component} from 'react'
import {View, Text, Navigator} from 'react-native'

import YourScene from './18.YourScene'

export default class NavigationApp extends Component{
    render(){
        return(
            <Navigator
                initialRoute = {{title:'Scene0', index:0}}      //默认一开始的初始化状态下的title和index的值为多少
                renderScene={(route, navigator)=>
                    <YourScene
                        title={route.title}
                        onForward={()=> {
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: 'Scene' + nextIndex,
                                index: nextIndex,
                            });
                        }}

                        onBack={()=> {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        );
    }
}