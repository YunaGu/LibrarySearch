import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BarChart = ({ data, onColumnClick }) => {
  const maxDataValue = Math.max(...data);

  const xLabels = [
    '0a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p',
  ];

  // Get the current hour from the system time
  const currentHour = new Date().getHours();

  // Define the indices of the labels to remain visible
  const visibleIndices = [3, 6, 9, 12, 15, 18, 21, 24];

  // State variable to keep track of the selected column index
  const [selectedColumn, setSelectedColumn] = useState(null);

  const handleColumnClick = (index) =>{
    setSelectedColumn(index === selectedColumn ? null : index);
  }


  return (
    <View style={styles.barChartContainer}>
      <View style={styles.container}>
        {data.map((value, index) => (
          <TouchableOpacity 
            key={index}    
            onPress={() => [onColumnClick(index, value), handleColumnClick(index)]}       
            style={[
              styles.barContainer,
              index === currentHour ? styles.highlightedBarContainer : null,
              index === selectedColumn ? styles.selectedBarContainer : null,
            ]}>
            <View style={[styles.bar, { height: (value / maxDataValue) * 80 }]} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.line} />

      <View style={styles.labelsContainer}>
        {xLabels.map((label, index) => (
          <View key={index} style={styles.labelWrapper}>
            {visibleIndices.includes(index) && (
              <Text style={[styles.barLabel, styles.textGray]}>{label}</Text>
            )}
          </View>
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  barChartContainer: {
    width: 300,
    position: 'relative',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // paddingHorizontal: 16,
    // paddingBottom: 16,
  },
  barContainer: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
    flex: 1,
    // backgroundColor:'red'
  },
  bar: {
    flex: 1,
    // width: 330 / 24 - 4, // Divide the width by the number of data points
    backgroundColor: 'rgba(4, 91, 198, 0.50)',
    // borderRadius: 2,
    margin: 1.5,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: 16,
    position: 'absolute',
    bottom: -15,
    width: '100%',
    // backgroundColor:'red'
  },
  labelWrapper: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor:'yellow'
  },
  barLabel: {
    fontSize: 12,
    textAlign: 'center',
    // backgroundColor:'blue'
    width: 25
  },
  line: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderColor: '#666',
    width: '100%'
  },
  textGray: {
    color: '#666'
  },
  highlightedBarContainer: {
    backgroundColor: '#045BC6',
  },
  selectedBarContainer: {
    backgroundColor: '#045BC6',
    margin: 1.5,
  },
});

export default BarChart;
