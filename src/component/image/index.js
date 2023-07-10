import {View, Text, Image} from 'react-native';
import React from 'react';

const ImageCustom = ({noStyle, imagePath,styles}) => {
  return (
    <View style={noStyle ? {} : {marginHorizontal: 10}}>
      <Image style={[styles,{height: 16, width: 16}]} source={imagePath} />
    </View>
  );
};

export default ImageCustom;
