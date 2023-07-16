import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function AnotherScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Another!</Text>
      </View>
    );
  }
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <View style={{height: 400,}}>
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarActiveTintColor: '#123123',
                        tabBarInactiveTintColor: '#ccc',
                        tabBarLabel: ({ focused, color }) => (
                            <Text style={[(focused ? {fontWeight: "bold"} : {fontWeight: "normal"}), {color: color}]}>{route.name}</Text>
                        ),
                        tabBarScrollEnabled: true
                    })}
            >
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
                <Tab.Screen
                name="Another"
                component={AnotherScreen}
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
