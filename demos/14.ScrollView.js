/**
 * Created by ruiwang on 17/3/3.
 */
import React, {Component} from 'react'
import { ScrollView, Image, Text } from 'react-native'

export default class Scroll extends Component {
    render(){
        return(
            <ScrollView horizontal={false}>
                <Text style={{fontSize:50}}>Scroll me please</Text>
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />

                <Text style={{fontSize:50}}>If you like</Text>
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />

                <Text style={{fontSize:50}}>Scrolling down</Text>
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />

                <Text style={{fontSize:50}}>What's the best</Text>
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />

                <Text style={{fontSize:50}}>Framework around?</Text>
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                    <Image style={{width:80,height:80}} source={require('../images/1.jpg')} />
                <Text style={{fontSize:50}}>React Native</Text>
            </ScrollView>
        );
    }
}