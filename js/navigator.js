import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    StatusBar
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

class CustomBadgeView extends Component {
    render(){
        return(
            <View>
                <Text style={{fontSize:5}}></Text>
            </View>
        );
    }
}
class RSNavigator extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTab:'home'
        }
    }

    render() {

        return (
            <View style={{paddingTop:65}}>
                <TabNavigator tabBarStyle={styles.tabBarStyle} sceneStyle={styles.sceneStyle}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        tabStyle={styles.tabStyle}
                        renderIcon={() => <Image source={require('./images/tab/tab_myself_n.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={require('./images/tab/tab_myself_p.png')} style={styles.tabIcon}/>}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Image source={require('./images/demo/slideshow5.jpg')} style={{height:500}} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        tabStyle={styles.tabStyle}
                        renderIcon={() => <Image source={require('./images/tab/tab_discovery_n.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={require('./images/tab/tab_discovery_p.png')} style={styles.tabIcon}/>}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <Image source={require('./images/demo/slideshow4.jpg')} style={{height:500}} />
                    </TabNavigator.Item>
                </TabNavigator>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarStyle:{
        height:65,
        justifyContent:'center',
        borderWidth:1,
        borderColor:'blue',
        borderStyle:'dashed',
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    sceneStyle:{
        height:400,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'red',
        borderStyle:'dashed'
    },
    tabStyle:{
        height:65,
        alignItems:'center',
        justifyContent:'center',
    },
    tabIcon:{
        width:25,
        height:25,
    }
});

module.exports = RSNavigator;