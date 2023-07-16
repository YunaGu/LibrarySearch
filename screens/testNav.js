import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function FloorScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
<View style={styles.floor}>
            <View style={styles.lowerGround}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Lower ground</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} Special Collections and Archives</Text>                   
                <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} eLounge</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}> {'\u2022'} vending machines</Text>        
            </View>

            <View style={styles.Ground}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Ground</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Social sciences, psychology, anthropology, education and politics.</Text>        
            </View>

            <View style={styles.First}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>First</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Business and economics, law, optometry and vision sciences</Text>        
            </View>

            <View style={styles.Second}>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Second</Text>
                <Text style={[styles.textBodyDefault, styles.textGray]}>Humanities, including philosophy, religion and theology, archaeology, history, art, language and literature, music, and modern Welsh and Celtic studies</Text>        
            </View>
        </View>

        {/* <Text style={[styles.textBodyDefault, styles.textGray]}>You can contact a <Text style={textLinked}>subject librarian</Text> if you have a subject-specific question, or use our general contact details for any other queries.</Text> */}
        <Text style={[styles.textBodyDefault, styles.textGray]}>You can contact a subject librarian if you have a subject-specific question, or use our general contact details for any other queries.</Text>

    </View>
  );
}

function AccessScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      
        <View style={styles.floor}>
            <Text style={[styles.textBodyDefault, styles.textGray]}>An accessible entrance for assisted entry to the building is located on the west side of the building at lower ground floor level. Entry is staff-mediated, use the intercom by the entrance.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>A lift provides access to all floors of the library.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Two disabled parking spaces are available close to the Arts and Social Studies Library (by the railway line) which can be accessed from Colum Drive.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>An accessible toilet is provided on the entrance floor.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Low-level catalogue terminals are available.</Text>        
            <Text style={[styles.textBodyDefault, styles.textGray]}>Staff will retrieve books from the shelves, please ask for assistance.</Text>        
        </View>
    </View>
  );
}

function StudyScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Text style={[styles.textBodyDefault, styles.textGray]}>The library has a variety of silent, quiet and social zones with range of study spaces including desks with or without electrical sockets, height adjustable desks and open access PCs.
Library group rooms allows you to find and book group study rooms in libraries across the University.</Text>
    </View>
  );
}

function FacilitiesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        <Text style={[styles.textBodyDefault, styles.textGray]}>Accessibility, Printers, Power Sockets, Wifi, Cloakroom, Computers, Study rooms, Lockers</Text>
      </View>
    );
  }
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <View style={{height: 600,}}>
        <Tab.Navigator
        style={styles.card}
            initialRouteName="Floor"
            screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarActiveTintColor: '#383735',
                        tabBarInactiveTintColor: '#383735',
                        tabBarStyle: {
                            backgroundColor: '#F5F5F3',
                            height: 31,
                            display: 'flex',
                            padding: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            // gap:5,
                        },
                        tabBarItemStyle:{ 
                            // height: 31,
                            // backgroundColor:'red',
                            padding: 0,
                        },
                        // tabBarBackground: (backgroundColor) => {{backgroundColor: backgroundColor}},
                        tabBarLabel: ({ focused, color }) => (
                            <View style={{width: '100%',height: "100%"}}>
                                <Text style={[(focused ? {fontWeight: '600'} : {fontWeight: '400'}), {color: color}, {fontSize: 17}, {lineHeight:21}]}>{route.name}</Text>
                            </View>
                            ),
                        tabBarScrollEnabled: true
                    })}
            >
            <Tab.Screen
                name="Floor Directory"
                component={FloorScreen}
            />
            <Tab.Screen
                name="Access"
                component={AccessScreen}
            />
            <Tab.Screen
                name="Study Space"
                component={StudyScreen}
            />
                <Tab.Screen
                name="Facilities"
                component={FacilitiesScreen}
            />
            </Tab.Navigator>
    </View>
    
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    card:{
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#F5F5F3',
        padding: 10,
        gap: 10,
      },
    floor:{
        gap: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    selectedTab:{
        padding: 5,
        borderBottomWidth: 3,
        borderBottomColor: '#383735'
    },
    unselectedTab:{
        padding: 5,
    },
    Tabs:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        width: '100%',
        overflow: 'hidden',
    },
    card:{
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#F5F5F3',
        padding: 10,
        gap: 10,
      },
      textBodyBold:{
        color: "#383735",
        // fontFamily: 'Franklin Gothic Book',
        fontSize: 17,
        lineHeight: 24,
        // fontStyle: 'normal',
        fontWeight: '600',
        textAlign: "left",
    },
    textBodyDefault:{
        color: "#383735",
        // fontFamily: 'Franklin Gothic Book',
        fontSize: 17,
        lineHeight: 24,
        // fontStyle: 'normal',
        fontWeight: '400',
        textAlign: "left",
    },
    textGray:{
        color: "#666",
    },

})