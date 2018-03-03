import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
module.exports = {
  width:width,
  height:height,
  rem:width/40
};
