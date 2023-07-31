import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import People from "../assets/people.png";
// import Icon from 'react-native-vector-icons/Ionicons';
import BarChart from './CustomisedBarChart';
// import Barchart from './Barchart';
import BottomModal from './BottomModal';

const Occupancy = () => {

  const data = [10,10,10,10,10,10,10,5,10,40,70,60,50,55,70,60,30,20,10,3,20,20,20,20];

      // Get the current hour from the system time
      const currentHour = new Date().getHours();


  return (
    <View style={styles.compWrapper}>
      <View style={styles.titleWrapper}>
        <View style={styles.firstTwo}>
          <Image source={People} style={{ height: 13, width: 18 }}></Image>
          <Text style={styles.textBodyBold}>Occupancy rate</Text>
        </View>
        {/* <Icon name="chevron-down-outline" size={24} color='#383735'></Icon> */}
      </View>

      <BottomModal />

      <View style={styles.rates}>
        <View style={styles.realTime}>
          <Text style={styles.textBodyDefault}>Real time: {currentHour} {(currentHour>12? 'pm': 'am' )} - </Text>
          <Text style={[styles.textBodyDefault, styles.textBlue]}>{data[currentHour]}%</Text>
        </View>

        <View style={styles.forecast}>
          <Text style={[styles.textBodyDefault, styles.textGray]}>Tap hours for forecasts</Text>
        </View>
      </View>

      {/* Bar chart */}
      <View style={styles.barChart}>
        {/* <Barchart data={[0, 0, 0, 0, 0, 0, 0, 5, 10, 40, { value: 70, itemStyle: { color: '#045BC6' } }, 60, 50, 55, 70, 60, 30, 20, 10, 3, 0, 0, 0, 0]} selectedColumnIndex={selectedColumnIndex} /> */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <BarChart data={data} /> */}
      <BarChart data={data} />
    </View>
      </View>

      {/* <Barchart /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  barChart: {
    height: 115,
    width: 330,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forecast: {
    marginLeft: 38,
  },
  realTime: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 38
  },
  textGray: {
    color: '#666'
  },
  textBlue: {
    color: '#045BC6'
  },
  border: {
    borderColor: 'rgba(0, 0, 0, 0.20)',
    borderWidth: 1,
    borderRadius: 6,

    width: 135, //how to hug content?
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,

    gap: 10,

    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 38,
  },
  firstTwo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  compWrapper: {
    display: 'flex',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
  },
  textBodyBold: {
    color: "#383735",
    // fontFamily: 'Franklin Gothic Book',
    fontSize: 17,
    lineHeight: 24,
    // fontStyle: 'normal',
    fontWeight: '600',
    textAlign: "left",
  },
  textBodyDefault: {
    color: "#383735",
    // fontFamily: 'Franklin Gothic Book',
    fontSize: 17,
    lineHeight: 24,
    // fontStyle: 'normal',
    fontWeight: '400',
    textAlign: "left",
  },
});

export default Occupancy;
