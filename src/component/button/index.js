import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ImageCustom from '../image';
import {styles} from './styles';

const Button = ({
  buttonColor,
  imagePath,
  title,
  onPress,
  customStyle,
  width,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        customStyle,
        styles.button,
        {backgroundColor: buttonColor, width: width ? width : 147},
      ]}>
      {imagePath && <ImageCustom noStyle imagePath={imagePath} />}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
