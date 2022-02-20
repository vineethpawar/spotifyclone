import {Box, Pressable, Skeleton, Text} from "native-base";
import React from "react";
import {ImageContainer} from "./ImageContainer";
interface SliderItemList {
  isLoaded?: boolean;
}
export const SliderListItem: React.FC<SliderItemList> = ({
  isLoaded = false,
}) => {
  return (
    <Pressable>
      {({isPressed}) => {
        return (
          <Box
            w={150}
            mr={5}
            style={{
              transform: [{scale: isPressed && isLoaded ? 0.96 : 1}],
            }}>
            <Box my={3}>
              <Skeleton
                size={150}
                borderRadius={20}
                speed={2}
                startColor={"gray.700"}
                endColor={"gray.800"}
                isLoaded={isLoaded}>
                <ImageContainer size={150} borderRadius={20} />
              </Skeleton>
            </Box>
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
                noOfLines={1}
                pb={"2px"}
                fontWeight={"bold"}
                fontSize={16}
                color={"lightgrey"}>
                The stories of Mahabhrata
              </Text>
            </Skeleton>

            {isLoaded ? (
              <Text
                noOfLines={2}
                lineHeight={"sm"}
                fontWeight={"500"}
                fontSize={15}
                color={"grey"}>
                The stories of Mahabhrata
              </Text>
            ) : (
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
