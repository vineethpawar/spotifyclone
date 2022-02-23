import {Heading, ScrollView, Text, VStack} from "native-base";
import React from "react";
import SliderListItem from "./common/SliderListItem";
interface SliderList {
  title: string;
  isLoaded?: boolean;
  type: string;
}
export const SliderList: React.FC<SliderList> = ({
  title,
  isLoaded = false,
  type,
}) => {
  return (
    <VStack my={3}>
      {/* @ts-ignore */}
      <Text variant="heading" mt={3}>
        {title}
      </Text>
      <ScrollView horizontal>
        <SliderListItem type={type} isLoaded={isLoaded} />
        <SliderListItem type={type} isLoaded={isLoaded} />
        <SliderListItem type={type} isLoaded={isLoaded} />
        <SliderListItem type={type} isLoaded={isLoaded} />
        <SliderListItem type={type} isLoaded={isLoaded} />
        <SliderListItem type={type} isLoaded={isLoaded} />
      </ScrollView>
    </VStack>
  );
};

export default SliderList;
