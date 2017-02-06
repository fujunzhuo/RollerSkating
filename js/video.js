import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ScrollView,
    ListView,
} from 'react-native';

import Cheerio from 'cheerio';


class Video extends Component {

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


            var $ = Cheerio.load(html);
            var d = $('span','.content').text();
            t.setState({data:d});



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
                <Text>{this.state.data}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});



module.exports = Video;