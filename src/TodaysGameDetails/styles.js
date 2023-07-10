import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor:'grey'
  },
  modalView: {
    backgroundColor: 'white',
    height: 468,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 16,
  },
  modalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
  },
  entryTicketText: {
    color: '#727682',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 28,
  },
  winTextStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#b5c0c8',
  },
  priceText: {
    color: '#03167f',
    fontSize: 14,
    fontWeight: '600',
  },
  totalText: {
    color: '#727682',
    fontSize: 12,
    fontWeight: '500',
  },
  totalTextCount: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 28,
    marginBottom: 14,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  line: {
    height: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 170,
  },
  line2: {
    width: 130,
    marginBottom: 10,
    marginLeft: 130,
  },
});
