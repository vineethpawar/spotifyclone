import {ScrollView, VStack} from "native-base";
import React from "react";
import {CommonlyPlayedList} from "./components/CommonlyPlayedList";
import {ScreenTitleBar} from "./components/ScreenTitleBar";
import SliderList from "./components/SliderList";

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView position={"relative"} bg="background.200" py={5} px={3}>
      <ScreenTitleBar
        title="Good morning"
        icons={[
          {iconName: "history", iconSize: 29},
          {iconName: "settings", iconSize: 27},
        ]}
      />
      <CommonlyPlayedList isLoaded={true} />
      <SliderList title="Episodes for you" isLoaded={true} />
      <SliderList title="Artist" type="artist" isLoaded={true} />
      <SliderList title="Recently played" type="recent" isLoaded={true} />
      <VStack h={true ? 40 : 20} />
    </ScrollView>
  );
};
