import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import { observer } from 'mobx-react/native';
// import NewItem from './NewItem'
@observer
export default class TodoList extends Component {
  constructor () {
    super();
    this.state = {
      text:'',
      showInput:false
    }
  }
  componentDidMount(){
    console.log(this.props);
  }
  toggleInput() {
    this.setState({showInput:!this.state.showInput})
  }
  addListItem(){
    this.props.screenProps.store.addListItem(this.state.text);
    this.setState({
      text:'',
      showInput:!this.state.showInput
    })
  }
  removeListItem() {
    this.props.store.removeListItem(item);
  }
  updateText(text) {
    this.setState({text})
  }
  addItemToList(item){
    // this.props.navigation.
    console.log('hello addItemToList')
  }
  render() {
    const { showInput } = this.state;
    const { list } = this.props.screenProps.store;
    return (
      <View style={{flex:1}}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>My List App</Text>
        </View>
        {!list.length?<NoList/>:null}
        <View style={{flex:1}}>
          {list.map((l,i) => {
            return <View key={i} style={styles.itemContainer}>
              <Text
                style={styles.item}
                onPress={this.addItemToList.bind(this,l)}>{l.name.toUpperCase()}</Text>
              <Text
                style={styles.deleteItem}
                onPress={this.removeListItem.bind(this,l)}>Remove</Text>
            </View>
          })}
        </View>
        {/* <TouchableHighlight
          underlayColor='transparent'
          onPress={
            this.state.text === ''?this.toggleInput.bind(this)
            :this.addListItem.bind(this,this.state.text)
          }
          style={styles.button}>
            {showInput?<TextInput
             style={styles.input}
             onChangeText={(text) => this.updateText(text)}/>:null}
          </TouchableHighlight> */}
      </View>
    )
  }
}

const NoList = () => (
  <View style={styles.noList}>
    <Text style={styles.noListText}>No list,add list to get start</Text>
  </View>
)

const styles = StyleSheet.create({
  itemContainer:{
    borderBottomWidth:1,
    borderBottomColor:'#ededed',
    flexDirection:'row'
  },
  item:{
    color:'#156e9a',
    fontSize:18,
    flex:3,
    padding:20
  },
  deleteItem: {
    flex:1,
    padding:20,
    color:'#a3a3a3',
    fontWeight:'bold',
    marginTop:3
  },
  button: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth:1,
    borderTopColor:'#156e9a'
  },
  bottonText: {
    color:'#156e9a',
    fontWeight:'bold'
  },
  heading: {
    height:80,
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:'#156e9a'
  },
  headingText:{
    color:'#159e9a',
    fontWeight:'bold'
  },
  input:{
    height:70,
    backgroundColor:'#f2f2f2',
    padding:20,
    color:'#159e9a'
  },
  noList:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  noListText:{
    fontSize:22,
    color:'#156e9a'
  }
})
