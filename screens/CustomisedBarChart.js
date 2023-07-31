import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BarChart = ({ data }) => {
  // Calculate the maximum value in the data array to scale the bars appropriately
  const maxDataValue = Math.max(...data);

  const xLabels = [
    '0a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p',
  ];

  return (
    <View style={styles.container}>
      {data.map((value, index) => (
        <View key={index} style={styles.barContainer}>
          <View style={[styles.bar, { height: (value / maxDataValue) * 150 }]} />
          <Text style={styles.barLabel}>{xLabels[index]}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  barContainer: {
    alignItems: 'center',
  },
  bar: {
    width: 20,
    backgroundColor: 'blue',
    marginBottom: 4,
    borderRadius: 5,
  },
  barLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default BarChart;