import {View, Text, Modal} from 'react-native';
import React from 'react';
import Header from '../component/header';
import {styles} from './styles';
import NumberScroll from '../component/scrollableNumber';
import {Images} from '../assets/images/images';
import ImageCustom from '../component/image';
import Button from '../component/button';
import {useNavigation, useRoute} from '@react-navigation/native';

const TodaysGameDetails = () => {
  const navigation=useNavigation()
  const {params} = useRoute();
  return (
    <View style={{backgroundColor: 'lightgrey', flex: 1}}>
      <Header title={`Today's Games`} />
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={[styles.line, {width: 30}]} />
              <Text style={styles.modalText}>
                Your Prediction is {params?.title}
              </Text>
              <Text style={styles.entryTicketText}>Entry tickets</Text>
              <NumberScroll />
              <Text style={styles.winTextStyle}>You can win </Text>
              <View style={styles.detailContainer}>
                <Text style={styles.priceText}>$5000</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.totalText}>Total</Text>
                  <ImageCustom imagePath={Images.coin_icon()} />
                  <Text style={styles.totalTextCount}>5</Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  width={343}
                  buttonColor={params?.color}
                  title={'Submit my prediction'}
                  onPress={() => navigation.navigate('ProfileScreen')}
                />
              </View>
              <View style={[styles.line, styles.line2]} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default TodaysGameDetails;
