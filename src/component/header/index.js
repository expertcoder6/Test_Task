import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = ({title = 'header', isGroupIcon, isNotification}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {isGroupIcon && (
        <TouchableOpacity
          disabled={!isGroupIcon}
          onPress={() => {
            navigation.navigate('TodaysGame');
          }}>
          <Image
            style={styles.backIcon}
            source={require('../../assets/images/Group.jpg')}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.titleHeader}>{title}</Text>
      {isNotification && (
        <TouchableOpacity
          disabled={!isNotification}
          onPress={() => {
            navigation.navigate('TodaysGame');
          }}>
          <View>
            <Text style={styles.notificationCount}>1</Text>
            <Image
              style={styles.backIcon}
              source={require('../../assets/images/comment-alt.jpg')}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
