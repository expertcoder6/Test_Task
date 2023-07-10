import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const NumberScroll = () => {
  const Number = () => {
    let arr = [];
    for (let i = 1; i <= 20; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <>
      <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={Number()}
        renderItem={({_, index}) => {
          return (
            <View
              style={{
                backgroundColor: index == 2 ? '#EADEFE' : '#ffff',
                width: '100%',
                height: 36,
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.numberStyle,
                  {fontWeight: index == 2 ? '600' : '100'},
                ]}>
                {index + 1}
              </Text>
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    backgroundColor: '#EEE',
  },
  selectedNumberButton: {
    backgroundColor: '#333',
  },
  numberText: {
    fontSize: 18,
    color: '#333',
  },
  selectedNumberText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  numberStyle: {
    color: '#333',
    fontSize: 24,
    // fontWeight:'600'
  },
});

export default NumberScroll;
