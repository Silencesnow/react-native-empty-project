import { StyleSheet } from 'react-native';
import { width, height, rem } from '../../utils/theme';
const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'column',
    backgroundColor: '#fff',
  },
  welcome: {
    height:44,
    lineHeight:44,
    fontSize: 1.8*rem,
    textAlign: 'center',
    color:'#586675',
    shadowColor:'#000',
    shadowOpacity:0.5,
    zIndex:99
  },
  bannerContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:9,
    borderBottomColor:'#e8e9ea',
    height:22*rem+9
  },
  bigImg: {
    width:28.75*rem,
    height:22*rem,
  },
  smallImgWrapper: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    width:10.8*rem,
    height:22*rem,
  },
  smallImg: {
    width:10.85*rem,
    height:10.85*rem
  },
  remindHeader: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:36,
  },
  remindTitle: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  remindTitleImg: {
    marginLeft:12,
    marginRight:6,
    width:20,
    height:20
  },
  remindTitleText: {
    fontSize:1.5*rem,
    color:'#062544'
  },
  remindMoreText: {
    fontSize:1.2*rem,
    color:'#8da1ac',
  },
  remindMoreImg: {
    marginLeft:9,
    marginRight:12,
    width:0.7*rem,
    height:1.2*rem
  },
  remindBody: {
    display:'flex',
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:12,
    paddingRight:12
  },
  remindBodyWrapper: {
    position:'relative'
  },
  remindBodyImg: {
    marginBottom:1*rem,
    width:18*rem,
    height:8.2*rem,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  remindBodyText: {
    position:'absolute',
    top:3.3*rem,
    width:18*rem,
    fontSize:1.6*rem,
    color:'#fff',
    textAlign:'center'
  }
});

module.exports = {
  styles
}
