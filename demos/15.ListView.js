import React, {Component} from 'react'
import { ListView, View, Text} from 'react-native'

export default class List extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2});
        this.state = {
            dataSource:ds.cloneWithRows([
                'John', 'Jessica', 'Joy', 'Jay', 'Jump', 'Jarry'
            ])
        };
    }
    render(){
        return(
            <View style={{flex:1,padding:50}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=><Text>{rowData}</Text>}
                />
            </View>
        );
    }
}