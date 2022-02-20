import {
  Box,
  FlatList,
  Heading,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import {CommonlyPlayedList} from "./components/CommonlyPlayedList";
import {Greeting} from "./components/Greeting";
import SliderList from "./components/SliderList";

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView bg="background.200" py={5} px={3}>
      <Greeting mb={2} />
      <CommonlyPlayedList isLoaded={true} />
      <SliderList />
      <SliderList />

      <VStack h={20} />
    </ScrollView>
  );
};
