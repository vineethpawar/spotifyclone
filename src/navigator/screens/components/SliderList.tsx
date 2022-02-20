import {Box, Heading, ScrollView, Text, VStack} from "native-base";
import React from "react";
import {ImageContainer} from "./common/ImageContainer";
import SliderListItem from "./common/SliderListItem";

export const SliderList = () => {
  return (
    <VStack my={3}>
      <Heading my={3}>Shows you might like awd awd awdawd </Heading>
      <ScrollView horizontal>
        <SliderListItem isLoaded={true} />
        <SliderListItem />
        <SliderListItem />
        <SliderListItem />
        <SliderListItem />
        <SliderListItem />
      </ScrollView>
    </VStack>
  );
};

export default SliderList;
