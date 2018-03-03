import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './models/home';
import BroadcastHome from './models/broadcast/broadcastHome';
import LabelList from './models/broadcast/label/labelList';
import TencolourWebView from './components/webview'
import TodoList from './models/testMobx/todoList'

export default Navigator = StackNavigator(
  {
    Home: {
      screen:BroadcastHome,
      path:'broadcast',
    },
    Webview:{
      screen:TencolourWebView
    },
    LabelList:{
      screen:LabelList
    },
    TestList:{
      screen:TodoList
    }
  },{
    headerMode: 'none',
    initialRouteName:'TestList'
    // transitionConfig: () => ({
    //   transitionSpec: {
    //     duration: 300,
    //     easing: Easing.out(Easing.poly(4)),
    //     timing: Animated.timing,
    //   },
    //   screenInterpolator: sceneProps => {
    //     const { layout, position, scene } = sceneProps;
    //     const { index } = scene;
    //
    //     const height = layout.initHeight;
    //     const translateY = position.interpolate({
    //       inputRange: [index - 1, index, index + 1],
    //       outputRange: [height, 0, 0],
    //     });
    //     const opacity = position.interpolate({
    //       inputRange: [index - 1, index - 0.99, index],
    //       outputRange: [0, 1, 1],
    //     });
    //     return { opacity, transform: [{ translateY }] };
    //   },
    // }),
})
