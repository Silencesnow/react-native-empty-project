import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import {styles} from './styles.js';
export default class BroadcastHeader extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    const { bannerList, recommendLabels, navigate } = this.props.data;
    return (<View>
      { bannerList.length&&recommendLabels.length?<View>
          <View style={styles.bannerContainer}>
            <TouchableWithoutFeedback
              onPress={() =>
                navigate('Webview', { uri:bannerList[1].h5Url  })
              }>
            <Image
              style={styles.bigImg}
              source={{uri:bannerList[0].coverUrl}}
            />
            </TouchableWithoutFeedback>
            <View style={styles.smallImgWrapper}>
              <TouchableWithoutFeedback
                onPress={() =>
                  navigate('Webview', { uri:bannerList[1].h5Url  })
                }>
                <Image
                  style={styles.smallImg}
                  source={{uri:bannerList[1].coverUrl}}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() =>
                  navigate('Webview', { uri:bannerList[2].h5Url  })
                }>
                <Image
                  style={styles.smallImg}
                  source={{uri:bannerList[2].coverUrl}}
                />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.remindHeader}>
            <View style={styles.remindTitle}>
              <Image
                style={styles.remindTitleImg}
                source={{uri:'http://img.10colour.com/frontEnd/sodrehh7wsqzf490563dnwkhjldzflzkuydvxlo362eq5689.png'}}
                resizeMethod="resize"
              />
              <Text style={styles.remindTitleText}>#&nbsp;推荐&nbsp;#</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() =>
                navigate('LabelList', {})
              }>
              <View style={styles.remindTitle}>
                <Text style={styles.remindMoreText}>查看全部</Text>
                <Image
                  style={styles.remindMoreImg}
                  source={{uri:'http://img.10colour.com/frontEnd/y3pw979rczlc3waw0om3mkyaltgtnrgxhq8unrpb1q0bzm64.png'}}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.remindBody}>{
              recommendLabels.map((item,index)=>{
                return <View
                  style={styles.remindBodyWrapper}
                  key={'remindBodyImg'+index}
                  ><Image
                        style={styles.remindBodyImg}
                        source={{uri:item.coverUrl}}
                      />
                      <Text style={styles.remindBodyText}>{item.name}</Text></View>
              })
            }
          </View>
        </View>:<Text>加载中</Text>}
    </View>)
  };
}
