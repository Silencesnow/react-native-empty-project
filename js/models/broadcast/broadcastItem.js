import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import {styles} from './itemStyles.js';
import {formatTime} from '../../utils/formatTime';

export default class BroadcastItem extends Component<{}> {
  constructor(props){
    super(props);
  }
  render() {
    const { data } = this.props;
    console.log(data)
    return (
      <View style={styles.broadcastItem}>
        <View style={styles.header}>
          <View style={styles.user}>
            <View style={styles.userImg}>
              <Image
                style={styles.userHeadimg}
                source={{uri:data.headimgurl}}
              />
              <Image
                style={styles.elfMainImg}
                source={{uri:data.elfMainImg}}
              />
              <Image
                style={styles.userSex}
                source={{uri:'http://img.10colour.com/file/valley/sex_'+data.sex+'@2x.png'}}
              />
            </View>
            <View>
              <Text style={styles.nickname}>{data.nickname}</Text>
              <Text style={styles.valleyName}>{data.valleyName}</Text>
            </View>
          </View>
          <Text style={styles.userTime}>{formatTime(data.createDate)}</Text>
        </View>
        {data.contentType==='PHOTO'?
        <View style={styles.content}>
          <Image style={styles.singleImg} source={{uri:data.content}}/>
          <Text style={styles.text} numberOfLines={2}>{data.title}</Text>
        </View>
        :<Text style={styles.text} numberOfLines={2}>{data.title}</Text>}
        <View style={styles.bottom}>
          <View style={styles.bottomInfoWrapper}>
            <View style={styles.bottomInfo}>
              <Image
                style={styles.icon} source={{uri:data.favored?'http://img.10colour.com/frontEnd/hwhsm78jstrvpbdfgwaxeofi45ibdqyab7wzhmcq4or2grlp.png':'http://img.10colour.com/frontEnd/3tya0it3jflqoox1ozfr4nqv812rz40hwg3guo0qu6pxhc85.png'}}/>
              <Text style={data.favored?styles.bottomFavorText:styles.bottomText}>{data.favourCount}</Text>
            </View>
            <View style={styles.bottomInfo}>
              <Image
                style={styles.icon}
                source={{uri:'http://img.10colour.com/frontEnd/ph78cmnbfnfbexxds3gtxoijnrqky9atyh8cfoubhq69cqb2.png'}}/>
              <Text style={styles.bottomText}>{data.commentCount}</Text>
            </View>
          </View>
          <Text style={styles.bottomMoreText}>...</Text>
        </View>
      </View>)
  };
}
