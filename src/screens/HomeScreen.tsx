import {ScrollView, VStack} from "native-base";
import React from "react";
import {CommonlyPlayedList} from "../components/home/CommonlyPlayedList";
import {ScreenTitleBar} from "../components/common/ScreenTitleBar";
import SliderList from "../components/home/SliderList";

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView
      position={"relative"}
      bg="background.200"
      py={5}
      px={3}
      showsVerticalScrollIndicator={false}>
      <ScreenTitleBar
        title="Good morning"
        icons={[
          {iconName: "history", iconSize: 29},
          {iconName: "settings", iconSize: 27},
        ]}
      />
      <CommonlyPlayedList isLoaded={true} />
      <SliderList title="Episodes for you" isLoaded={false} />
      <SliderList title="Artist" type="artist" isLoaded={true} />
      <SliderList title="Recently played" type="recent" isLoaded={true} />
      <VStack h={true ? 40 : 20} />
    </ScrollView>
  );
};
