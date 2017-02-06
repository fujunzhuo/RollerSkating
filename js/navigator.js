import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    View,
    StatusBar,
    ScrollView,
    ListView,
    DrawerLayoutAndroid
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Cheerio from 'cheerio';

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

        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2 });
        var dataArr = [];
        var t = this;
        var html = '';


        fetch('http://www.qiushibaike.com').then((response)=>{
            html = JSON.stringify(response._bodyInit);

            var reg3=/(\w)\n\n\n\n<span>(\w)<\/span>\n\n\n<\/div>(\w)/g;
            dataArr = html.toString().match(reg3);

            t.setState({data:html});
            var $ = Cheerio.load(html);

        });

        this.state = {
            selectedTab:'Home',
            data:html,
            dataSource:ds.cloneWithRows(dataArr),
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


                        <View style={{flex: 1}}>
                            <ScrollView>
                                <Text>{this.state.data}</Text>
                            </ScrollView>
                            {/*
                            <ListView
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => {
                                    return(
                                        <View style={styles.container}>
                                            <Text style={styles.text}>{rowData}</Text>
                                        </View>
                                    );
                                }}
                            />*/}
                        </View>


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
        flex:1,
        justifyContent:'center',
    },
    tabIcon:{
        width:25,
        height:25,
    },
    container:{
        flex: 1,
        height:100,
        flexDirection: 'row',
        backgroundColor:'#e0f6ff',
        borderRadius:5,
        justifyContent:'center',
        marginTop:20,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        borderWidth:1,
        borderColor:'red',

    },
    text:{
        fontSize:30,
        fontWeight:'100',
        color:'#009830',
        alignSelf:'center',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    img:{
        width:80,
        height:80,
        marginTop:10,
        marginRight:10
    }
});



module.exports = RSNavigator;