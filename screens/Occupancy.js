import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import People from "../assets/people.png";
// import Icon from 'react-native-vector-icons/Ionicons';
import BarChart from './CustomisedBarChart';
import Barchart from './Barchart';
import BottomModal from './BottomModal';

const Occupancy = () => {

  const data = [0,0,0,0,0,0,0,5,10,40,70,60,50,55,70,60,30,20,10,3,0,0,0,0];

  // Get the current hour from the system time
  const currentHour = new Date().getHours();


  // Define the initial state for selected column and its value
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedColumnValue, setSelectedColumnValue] = useState(null);

  // Function to handle column click
  const handleColumnClick = (index, value) => {
    setSelectedColumn(index === selectedColumn ? null : index);
    setSelectedColumnValue(index === selectedColumn ? null : value);
  };

    // Define the xLabels for the columns
    const xLabels = [
      '0 a', '1 a', '2 a', '3 a', '4 a', '5 a', '6 a', '7 a', '8 a', '9 a', '10 a', '11 a',
      '12 p', '1 p', '2 p', '3 p', '4 p', '5 p', '6 p', '7 p', '8 p', '9 p', '10 p', '11 p',
    ]; 

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
        <Text style={styles.textBodyDefault}>Real time: {currentHour > 12? currentHour - 12 : currentHour} {currentHour > 12 ? 'pm' : 'am'} - </Text>
        <Text style={[styles.textBodyDefault, styles.textBlue]}>{data[currentHour]}%</Text>
      </View>

      <TouchableOpacity style={styles.forecast} onPress={() => setSelectedColumnValue(null)}>
        <Text style={styles.textBodyDefault}>
          {selectedColumnValue ? `Forecast: ${xLabels[selectedColumn]}m - ` : ''}
          <Text style={selectedColumnValue ? styles.textBlue : styles.textGray}>
            {selectedColumnValue ? `${selectedColumnValue}%` : 'Tap hours for forecasts'}
          </Text>
        </Text>
      </TouchableOpacity>


      <View style={styles.barChart}>
        {/* <Barchart data={[0, 0, 0, 0, 0, 0, 0, 5, 10, 40, { value: 70, itemStyle: { color: '#045BC6' } }, 60, 50, 55, 70, 60, 30, 20, 10, 3, 0, 0, 0, 0]} selectedColumnIndex={selectedColumnIndex} /> */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <BarChart data={data} onColumnClick={handleColumnClick}/>    
        </View>
      </View>
      {/* <Barchart/> */}
    </View>
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
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: "left",
  },
  textBodyDefault: {
    color: "#383735",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '400',
    textAlign: "left",
  },
});

export default Occupancy;
