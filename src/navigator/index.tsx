import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {VStack} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import {HomeScreen} from "./screens/HomeScreen";
import {SearchScreen} from "./screens/SearchScreen";
import {LibraryScreen} from "./screens/LibraryScreen";
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Homescreen" component={HomeScreen} />
  </Stack.Navigator>
);
const SearchStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Searchscreen" component={SearchScreen} />
  </Stack.Navigator>
);
const LibraryStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Libraryscreen" component={LibraryScreen} />
  </Stack.Navigator>
);
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName = "home-filled";
            if (route.name === "Home") {
              iconName = focused ? "home-filled" : "home-filled";
              color = focused ? "white" : "grey";
            } else if (route.name === "Search") {
              color = focused ? "white" : "grey";
              iconName = focused ? "search" : "search";
            } else if (route.name === "Your Library") {
              iconName = focused
                ? "collections-bookmark"
                : "collections-bookmark";
              color = focused ? "white" : "grey";
            }
            return <Icon name={iconName} size={30} color={color} />;
          },
          tabBarStyle: {
            borderTopColor: "transparent",
            backgroundColor: "black",
            opacity: 0.8,
            border: 0,
            height: 55,
            position: "absolute",
            bottom: 0,
          },
          tabBarActiveTintColor: "white",
        })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Your Library" component={LibraryStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
