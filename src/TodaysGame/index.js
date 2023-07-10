import {View, Text} from 'react-native';
import React from 'react';
import Header from '../component/header';
import ImageCustom from '../component/image';
import {Images} from '../assets/images/images';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import Button from '../component/button';
import {useNavigation} from '@react-navigation/native';

const TodaysGame = () => {
  const navigation = useNavigation();
  const TableData = ({heading, value}) => {
    return (
      <View style={styles.tableContainer}>
        <Text style={styles.headingText}>{heading}</Text>
        <View style={styles.valueContainer}>
          <Text
            style={[
              styles.valueText,
              {
                marginLeft: heading === 'ENTRY FEES' ? 30 : 0,
              },
            ]}>
            {value}
          </Text>
          {heading === 'ENTRY FEES' && (
            <ImageCustom imagePath={Images.coin_icon()} />
          )}
        </View>
      </View>
    );
  };
  const Predict = ({icon, title}) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ImageCustom imagePath={icon} />
        <Text style={{color: '#727682', fontSize: 14, fontWeight: '600'}}>
          {title}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title={`Today's Games`} />
      <View style={styles.cardContainer}>
        <LinearGradient
          style={styles.gradientContainer}
          colors={['#6231AD', '#6231AD']}>
          <View style={styles.innerGradientContainer}>
            <View style={styles.innerGradientContainer}>
              <Text style={styles.TextStyle}>Under or Over</Text>
              <ImageCustom imagePath={Images.not_icon()} />
            </View>
            <View style={styles.innerGradientContainer}>
              <Text style={styles.TextStyle}>Starting in</Text>
              <ImageCustom imagePath={Images.clock_icon()} />
              <Text style={styles.TextStyle}>03:34:23</Text>
            </View>
          </View>
          <Text style={[styles.TextStyle, {marginTop: 16}]}>
            Bitcoin price will be under
          </Text>
          <Text style={[styles.TextStyle, {color: '#fff', fontSize: 14}]}>
            $24,524 at 7 a ET on 22nd Jan’21
          </Text>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            marginHorizontal: 16,
          }}>
          <TableData heading="PRIZE POOL" value="$12,000" />
          <TableData heading="UNDER" value="3.25X" />
          <TableData heading="OVER" value="1.23X" />
          <TableData heading="ENTRY FEES" value="5" />
        </View>
        <Text style={styles.predictionText}>{`What’s your prediction?`}</Text>
        <View style={styles.buttonContainer}>
          <Button
            buttonColor={'#452C55'}
            imagePath={Images.downArrow_icon()}
            title={'Under'}
            onPress={() =>
              navigation.navigate('TodaysGameDetails', {
                title: 'Under',
                color: '#452C55',
              })
            }
          />
          <Button
            buttonColor={'#6231AD'}
            imagePath={Images.upArrow_icon()}
            title={'Over'}
            onPress={() =>
              navigation.navigate('TodaysGameDetails', {
                title: 'Over',
                color: '#6231AD',
              })
            }
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomRow}>
            <Predict icon={Images.user_icon()} title={'355 Players'} />
            <Predict icon={Images.chart_icon()} title={'View chart'} />
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.greenProgress}>
              <View style={styles.redProgress} />
            </View>
          </View>
          <View style={styles.predictionCountContainer}>
            <Text style={styles.predictionCountText}>232 predicted under</Text>
            <Text style={styles.predictionCountText}>123 predicted over</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodaysGame;
