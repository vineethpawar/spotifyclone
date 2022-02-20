import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {VStack} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import {HomeScreen} from "./screens/HomeScreen";
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Default" component={HomeScreen} />
  </Stack.Navigator>
);
const SearchScreen = () => (
  <VStack flex={1} bg="background.200">
    <Icon name="search" size={40} color="white" />
  </VStack>
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
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Your Library" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
