/**
 * Created by ruiwang on 17/2/27.
 */

import React , {Component} from 'react'
import { Text, View, StyleSheet} from 'react-native'

export default class Color extends Component{
    render(){
        return(
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue,styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red,styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }

}

const styles=StyleSheet.create({
    red:{
        color:'red'
    },
    bigblue:{
        fontSize:30,
        color:'blue'
    }
})