import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../component/header';
import ImageCustom from '../component/image';
import {Images} from '../assets/images/images';
import {styles} from './styles';

const ProfileScreen = () => {
  const [tab, setTab] = useState('Games played');
  const Data = [
    {
      id: 1,
      image: Images.image(),
      title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      times: 3,
    },
    {
      id: 2,
      image: Images.image(),
      title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      times: 0,
    },
    {
      id: 3,
      image: Images.image(),
      title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      times: 0,
    },
    {
      id: 4,
      image: Images.image(),
      title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      times: 0,
    },
    {
      id: 5,
      image: Images.image(),
      title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      times: 0,
    },
    {
      id: 6,
      image: Images.image(),
      title: 'First Stripe Earned',
      description: 'Top 10% of highest spending players in a month',
      times: 0,
    },
  ];
  return (
    <ScrollView >
      <View style={{backgroundColor: '#ffff', paddingBottom: 20}}>
        <View style={{marginTop: 24, marginHorizontal: 14}}>
          <Header isGroupIcon isNotification title={`Profile`} />
          <View style={{alignItems: 'center', marginTop: 12}}>
            <Image
              source={Images.profile_image()}
              style={{height: 75, width: 75, borderRadius: 100}}
            />
            <Text style={styles.name}>Jina Simons</Text>
            <Text style={styles.pointText}>6000 Pts</Text>
            <Text style={styles.descriptionText}>
              I’m a software developer that has been in the crypto space since
              2012. And I’ve seen it grow and falter over a period of time.
              Really happy to be here!
            </Text>
            <View style={styles.logout}>
              <ImageCustom imagePath={Images.sign_out()} />
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </View>
          <View style={styles.starContainer}>
            <Image style={styles.star} source={Images.star_icon()} />
            <View>
              <Text style={styles.text}>Under or Over</Text>
              <View style={styles.underOverTopContainer}>
                <Image style={styles.image} source={Images.green_arrow()} />
                <Text style={styles.percent}>81%</Text>
              </View>
            </View>
            <View style={{marginHorizontal: 50}} />
            <View>
              <Text style={styles.text}>Top 5</Text>
              <View style={styles.underOverTopContainer}>
                <Image style={styles.image} source={Images.red_arrow()} />
                <Text style={styles.percent}>-51%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setTab('Games played')}
          style={[
            styles.tab,
            {
              borderBottomWidth: tab == 'Games played' ? 3 : 0,
              borderColor: tab == 'Games played' ? '#6231AD' : '',
            },
          ]}>
          <Text
            style={[
              styles.tabText,
              {color: tab == 'Games played' ? '#6231AD' : '#727682'},
            ]}>
            Games played
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab('Badges')}
          style={[
            styles.tab,
            {
              borderBottomWidth: tab == 'Badges' ? 3 : 0,
              borderColor: tab == 'Badges' ? '#6231AD' : '',
            },
          ]}>
          <Text
            style={[
              styles.tabText,
              {color: tab == 'Badges' ? '#6231AD' : '#727682'},
            ]}>
            Badges
          </Text>
        </TouchableOpacity>
      </View>
      {tab == 'Games played' && (
        <FlatList
          data={Data}
          keyExtractor={item => 'index' + item.id}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image style={{height: 60, width: 60}} source={item.image} />
              <View style={{marginLeft: 16, width: 250}}>
                <Text style={styles.title}>
                  {item.title}{' '}
                  {item.times !== 0 && (
                    <Text style={{color: '#FFA600'}}> x {item.times}</Text>
                  )}
                </Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      )}
      {tab == 'Badges' && (
        <FlatList
          data={Data}
          keyExtractor={item => 'index' + item.id}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image style={{height: 60, width: 60}} source={item.image} />
              <View style={{marginLeft: 16, width: 250}}>
                <Text style={styles.title}>
                  {item.title}{' '}
                  {item.times !== 0 && (
                    <Text style={{color: '#FFA600'}}> x {item.times}</Text>
                  )}
                </Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
      )}
    </ScrollView>
  );
};

export default ProfileScreen;
