import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

class RSNavigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'index'
        }
    }

    render(){
        return(

            <View style={styles.container} >
                <TabNavigator tabBarStyle={{height:200}}>
                    <TabNavigator.Item style={{height:200}}
                        selected={this.state.selectedTab === 'index'}
                        title="首页"
                        badgeText={10}
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("./img/01.jpg")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("./img/01.jpg")} />}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <Text>首页</Text>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});
module.exports = ()=> <RSNavigator />;