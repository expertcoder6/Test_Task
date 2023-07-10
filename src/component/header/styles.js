import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 48,
    width: '100%',
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  backIcon: {
    height: 24,
    width: 24,
  },
  titleHeader: {
    fontSize: 18,
    color: '#1D232B',
  },
  notificationCount: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
    width: 16,
    height: 16,
    top: -8,
    right: -5,
    backgroundColor: '#6231AD',
    borderRadius: 50,
  },
});
