import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

export default class TencolourWebView extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    const { navigation } = this.props;
    return (
        <WebView
          source={{uri: navigation.state.params.uri}}
          style={{marginTop: 20,width:'100%',height:'100%'}}
          onLoad={(e) => console.log('onLoad')}
        />
    );
  }
}
