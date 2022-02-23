import {Box, HStack, Pressable, Skeleton, Text, VStack} from "native-base";
import {IVStackProps} from "native-base/lib/typescript/components/primitives/Stack/VStack";
import React from "react";
import {config} from "../../../config";
import {ImageContainer} from "./common/ImageContainer";
interface CommonlyPlayedList extends IVStackProps {
  isLoaded?: boolean;
}
export const CommonlyPlayedList: React.FC<CommonlyPlayedList> = ({
  isLoaded = false,
}) => {
  //LOGIC
  let first = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  // console.log(first);
  let second = [];
  let ind = -1;
  for (
    let i = 0;
    i < Math.min(first.length, config.COMMONLY_PLAYED_LIST_LIMIT) / 2;
    i++
  ) {
    second.push([first[++ind], first[++ind]]);
  }
  // console.log(second);
  return (
    <VStack my={3} space={3}>
      {second.map((item, index) => (
        <HStack key={index} justifyContent={"space-between"} space={3}>
          <Pressable flex={1}>
            {({isPressed}) => {
              return (
                <Skeleton
                  speed={2}
                  startColor={"gray.700"}
                  endColor={"gray.800"}
                  isLoaded={isLoaded}>
                  <Box
                    bg={isPressed ? "gray.800" : "gray.700"}
                    opacity={isPressed ? 0.8 : 1}
                    borderRadius="5"
                    overflow={"hidden"}
                    style={{
                      transform: [{scale: isPressed ? 0.96 : 1}],
                    }}>
                    <HStack alignItems={"center"}>
                      <Box>
                        <ImageContainer size={55} />
                      </Box>
                      <HStack space={1} flex={1} p={2} alignItems={"center"}>
                        {/* @ts-ignore */}
                        <Text variant="commonlyPlayed">
                          Lorem, ipsum dolor.
                        </Text>
                        <ImageContainer
                          source="https://res.cloudinary.com/dpjkblzgf/image/upload/v1645244730/spotify/music-bar_goi9dv.gif"
                          size={5}
                        />
                      </HStack>
                    </HStack>
                  </Box>
                </Skeleton>
              );
            }}
          </Pressable>
          <Pressable flex={1}>
            {({isPressed}) => {
              return (
                <Skeleton
                  speed={2}
                  startColor={"gray.700"}
                  endColor={"gray.800"}
                  isLoaded={isLoaded}>
                  <Box
                    bg={isPressed ? "gray.800" : "gray.700"}
                    opacity={isPressed ? 0.8 : 1}
                    borderRadius="5"
                    overflow={"hidden"}
                    style={{
                      transform: [{scale: isPressed ? 0.96 : 1}],
                    }}>
                    <HStack alignItems={"center"}>
                      <Box>
                        <ImageContainer size={55} />
                      </Box>
                      <HStack space={1} flex={1} p={2} alignItems={"center"}>
                        {/* @ts-ignore */}
                        <Text variant="commonlyPlayed">
                          Lorem, ipsum dolor.
                        </Text>
                        <ImageContainer
                          source="https://res.cloudinary.com/dpjkblzgf/image/upload/v1645244730/spotify/music-bar_goi9dv.gif"
                          size={5}
                        />
                      </HStack>
                    </HStack>
                  </Box>
                </Skeleton>
              );
            }}
          </Pressable>
        </HStack>
      ))}
    </VStack>
  );
};
