import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import {styles} from './styles';
import BroadcastHeader from './broadcastHeader'
import BroadcastItem from './broadcastItem'
import { getBanner } from '../../services/broadcast';
import codePush from 'react-native-code-push';
export default class broadcastHome extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      bannerList:[],
      recommendLabels:[],
      broadcastList:[],
    }
  }
  componentDidMount() {
    fetch('https://api.10colour.com/v1/broadcast/banner')
    .then((response) =>{
      var data=JSON.parse(response._bodyInit);
      console.log(data.data);
      this.setState({
        bannerList:data.data
      })
    })
    .catch((err) =>{console.log(err);})
    fetch('https://api.10colour.com/broadcastLabels/recommendLabels')
    .then((response) =>{
      var data=JSON.parse(response._bodyInit);
      console.log(data.data);
      this.setState({
        recommendLabels:data.data
      })
    })
    .catch((err) =>{console.log(err);})
    fetch('https://api.10colour.com/v1/broadcast/all',{
      headers:{
        'API-VERSION':'v6'
      }
    })
    .then((response) =>{
      var data=JSON.parse(response._bodyInit);
      console.log(data.data);
      this.setState({
        broadcastList:data.data.list
      })
    })
    .catch((err) =>{console.log(err);})

  };
  render() {
    const { navigate } = this.props.navigation;
    const { bannerList, recommendLabels, broadcastList } = this.state;
    if(broadcastList.length){
      for(let i=0;i<broadcastList.length;i++){
        broadcastList[i].key=broadcastList[i].id;
      }
    }
    const headerData={
      navigate:navigate,
      bannerList:bannerList,
      recommendLabels:recommendLabels
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>广播1234</Text>
        <FlatList
          data={broadcastList}
          ListHeaderComponent={()=><BroadcastHeader data={headerData}/>}
          renderItem={({item})=><BroadcastItem data={item}/>}
          removeClippedSubviews={true}
        />
    </View>)
  };
}
