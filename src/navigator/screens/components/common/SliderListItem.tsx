import {Box, Pressable, Skeleton, Text} from "native-base";
import React from "react";
import {ImageContainer} from "./ImageContainer";
import {sliderListItemConfig} from "../../../../utils/common";
interface SliderItemList {
  isLoaded: boolean;
  type: string;
}

export const SliderListItem: React.FC<SliderItemList> = ({
  isLoaded = false,
  type = "album",
}) => {
  return (
    <Pressable>
      {({isPressed}) => {
        return (
          <Box
            w={sliderListItemConfig(type).width}
            mr={3}
            style={{
              transform: [{scale: isPressed && isLoaded ? 0.96 : 1}],
            }}>
            <Box my={3}>
              <Skeleton
                size={sliderListItemConfig(type).width}
                borderRadius={sliderListItemConfig(type).borderRadius}
                speed={2}
                startColor={"gray.700"}
                endColor={"gray.800"}
                isLoaded={isLoaded}>
                <ImageContainer
                  size={sliderListItemConfig(type).width}
                  borderRadius={sliderListItemConfig(type).borderRadius}
                />
              </Skeleton>
            </Box>

            {sliderListItemConfig(type).hasTitle && (
              <Skeleton
                h="4"
                mt={1}
                mb={"6px"}
                borderRadius={20}
                speed={2}
                startColor={"gray.700"}
                endColor={"gray.800"}
                isLoaded={isLoaded}>
                <Text
                  noOfLines={sliderListItemConfig(type).multiLineTitle ? 2 : 1}
                  pb={"2px"}
                  fontWeight={"500"}
                  // @ts-ignore
                  textAlign={sliderListItemConfig(type).textAlign}
                  fontSize={"sm"}
                  color={"lightgrey"}>
                  The sef sef sef seesfs ef
                </Text>
              </Skeleton>
            )}
            {!isLoaded && sliderListItemConfig(type).multiLineTitle && (
              <Skeleton
                h="4"
                mb={"6px"}
                borderRadius={20}
                speed={2}
                startColor={"gray.700"}
                endColor={"gray.800"}
              />
            )}

            {isLoaded && sliderListItemConfig(type).hasDesc && (
              <Text
                noOfLines={2}
                lineHeight={"sm"}
                fontWeight={"500"}
                fontSize={"xs"}
                color={"grey"}>
                The stories of Mahabhrata
              </Text>
            )}

            {!isLoaded && sliderListItemConfig(type).hasDesc && (
              <>
                <Skeleton
                  h="3"
                  mt={1}
                  borderRadius={20}
                  speed={2}
                  startColor={"gray.700"}
                  endColor={"gray.800"}
                />
                <Skeleton
                  h="3"
                  w={"50%"}
                  mt={1}
                  mb={"6px"}
                  borderRadius={20}
                  speed={2}
                  startColor={"gray.700"}
                  endColor={"gray.800"}
                />
              </>
            )}
          </Box>
        );
      }}
    </Pressable>
  );
};

export default SliderListItem;
