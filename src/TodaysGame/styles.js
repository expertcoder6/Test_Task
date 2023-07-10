import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  cardContainer: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
  },
  gradientContainer: {
    height: 104,
    width: '100%',
    padding: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderWidth: 0.5,
  },
  innerGradientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  predictionText: {
    color: '#727682',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 16,
    marginLeft: 16,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    marginTop: 20,
    backgroundColor: '#F6F3FA',
    marginBottom:10
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  progressContainer: {
    alignItems: 'center',
    marginTop: 14,
  },
  greenProgress: {
    backgroundColor: 'green',
    width: 325,
    height: 10,
    borderRadius: 5,
    marginLeft: 8,
  },
  redProgress: {
    borderRadius: 5,
    position: 'absolute',
    backgroundColor: 'red',
    top: 0,
    width: 250,
    height: 10,
  },
  predictionCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    marginLeft:8,
    marginBottom:20
  },
  predictionCountText: {
    color: '#B5C0C8',
    fontSize: 12,
    fontWeight: '500',
    marginHorizontal: 30,
  },
  TextStyle: {color: '#D2BAF5', fontSize: 12, fontWeight: '500'},
  tableContainer:{alignItems: 'center'},
  headingText: {
    color: '#B5C0C8',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  valueText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 30,
  },
});
