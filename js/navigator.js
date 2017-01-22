import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    StatusBar,
    DrawerLayoutAndroid
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
            selectedTab:'Home'
        }
    }

    render() {

        return (
            <View>
                <TabNavigator tabBarStyle={styles.tabBarStyle} sceneStyle={styles.sceneStyle}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Home'}
                        title="首页"
                        tabStyle={styles.tabStyle}
                        renderIcon={() => <Image source={require('./images/tab/tab_messagecenter_n.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={require('./images/tab/tab_messagecenter_p.png')} style={styles.tabIcon}/>}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'Home' })}>

                        <Image source={require('./images/demo/slideshow3.jpg')} style={{height:500}} />

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Suggest'}
                        title="推荐"
                        tabStyle={styles.tabStyle}
                        renderIcon={() => <Image source={require('./images/tab/tab_contact_n.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={require('./images/tab/tab_contact_p.png')} style={styles.tabIcon}/>}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'Suggest' })}>
                        <Image source={require('./images/demo/slideshow1.jpg')} style={{height:500}} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Find'}
                        title="发现"
                        tabStyle={styles.tabStyle}
                        renderIcon={() => <Image source={require('./images/tab/tab_discovery_n.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={require('./images/tab/tab_discovery_p.png')} style={styles.tabIcon}/>}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'Find' })}>
                        <Image source={require('./images/demo/slideshow2.jpg')} style={{height:500}} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Mine'}
                        title="我的"
                        tabStyle={styles.tabStyle}
                        renderIcon={() => <Image source={require('./images/tab/tab_myself_n.png')} style={styles.tabIcon}/>}
                        renderSelectedIcon={() => <Image source={require('./images/tab/tab_myself_p.png')} style={styles.tabIcon}/>}
                        onPress={() => this.setState({ selectedTab: 'Mine' })}>
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
        backgroundColor: '#eee',
        alignItems: 'center',
        position:'absolute',
        left:0,
        right:0,
        bottom:200,
        top:503,
    },
    sceneStyle:{
        height:500,
        alignItems:'center',
        justifyContent:'center',
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