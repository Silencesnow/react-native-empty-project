/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StatusBar
} from 'react-native';
import ListStore from './mobx/listStore';
import Navigator from './router';
import codePush from 'react-native-code-push';
export default class App extends Component<{}> {
  componentDidMount() {
    codePush.sync({
      deploymentKey: 'GO6xlDMK1adaWBHWX0UWsz_KD6CK5d1e2682-cf5d-4da1-bf0e-e694a2efcda1',
      updateDialog: {
        optionalIgnoreButtonLabel: '稍后',
        optionalInstallButtonLabel: '后台更新',
        optionalUpdateMessage: '有新版本了，是否更新？',
        title: '更新提示'
      },
      installMode: codePush.InstallMode.IMMEDIATE
    });
    fetch('https://api.10colour.com/session?phone=13632624065&passwd=h1990927',{
      method:'post',
      credentials: "include"
    })
    .then((response) =>{
      if(response.ok){
        console.log(response);
      }else {
        console.error(response)
      }
    })
    .catch((err) =>{console.log(err);})
  };
  render() {
    return [
      <StatusBar key="statusBar"
          translucent={false}
          backgroundColor="#fff"
          barStyle="dark-content"
        />,
        <Navigator key="navigator" screenProps={{store:ListStore}}/>
      ]
  }
}
