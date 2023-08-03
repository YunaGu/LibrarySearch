import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

const Tabs = ({ tabs, onTabPress }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabWidths, setTabWidths] = useState({});
  const scrollViewRef = useRef();

  const handleTabPress = (index) => {
    setActiveTab(index);
    onTabPress(index);
  };

  // Scroll to the active tab whenever it changes
  useEffect(() => {
    if (scrollViewRef.current && tabWidths[activeTab]) { //whether there's a valid width value stored in tabWidths for activeTab
      scrollViewRef.current.scrollTo({
        x: Object.values(tabWidths) //coverts the tabWidths object into an array
        .slice(0, activeTab) //take a clice of the array up to the activeTab index
        .reduce((a, b) => a + b, 0), //reduces the sliced array to a signle value (sum of all the tab widths)
        animated: true,
      });
    }
  }, [activeTab, tabWidths]);

  const handleTabLayout = (index, event) => {
    const { width } = event.nativeEvent.layout;
    setTabWidths((prevTabWidths) => ({
      ...prevTabWidths,
      [index]: width,
    }));
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContent}
    >
      <View style={styles.container}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabItem,
              index === activeTab && styles.activeTabItem,
              { width: tabWidths[index] },
            ]}
            onLayout={(event) => handleTabLayout(index, event)}
            onPress={() => handleTabPress(index)}
          >
            <Text
              style={[
                styles.tabText,
                index === activeTab && styles.activeTabText,
                // { fontWeight: index === activeTab ? 'bold' : 'normal' },
              ]}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F3',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    gap: 5,
    // paddingHorizontal: 10
  },
  tabItem: {
    paddingBottom: 5,
    marginHorizontal: 5,
    // backgroundColor:'green',
    alignItems: 'center',
  },
  activeTabItem: {
    backgroundColor: '#F5F5F3',
    borderBottomWidth: 3,
    borderColor: '#383735',
    paddingBottom: 5
  },
  activeTabTextWrapper: {
    fontWeight: '600',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  activeTabText: {
    color: '#383735',
  },
});

export default Tabs;
