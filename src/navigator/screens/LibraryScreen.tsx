import {ScrollView, VStack} from "native-base";
import React from "react";
import {CommonlyPlayedList} from "./components/CommonlyPlayedList";
import {ScreenTitleBar} from "./components/ScreenTitleBar";
import SliderList from "./components/SliderList";

export const LibraryScreen: React.FC = () => {
  return (
    <VStack>
      <VStack bg="background.200" px={3} pb={4} pt={6}>
        <ScreenTitleBar
          dp="https://wallpaperaccess.com/full/317501.jpg"
          title="Good morning"
          icons={[
            {iconName: "search", iconSize: 30, iconProps: {mt: "2px"}},
            {iconName: "add", iconSize: 35},
          ]}
        />
      </VStack>
      <ScrollView position={"relative"} bg="background.200" pb={5} px={3}>
        <SliderList title="Episodes for you" isLoaded={true} />
        <SliderList title="Artist" type="artist" isLoaded={true} />
        <SliderList title="Recently played" type="recent" isLoaded={true} />
        <VStack h={true ? "200px" : "115px"} />
      </ScrollView>
    </VStack>
  );
};
