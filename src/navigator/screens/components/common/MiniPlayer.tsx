import {HStack, Pressable, Progress, Text, VStack} from "native-base";
import React, {useState} from "react";
import {ImageContainer} from "./ImageContainer";
import Icon from "react-native-vector-icons/MaterialIcons";
interface MiniPlayer {
  showToast: (title: string) => void;
}
const MiniPlayer: React.FC<MiniPlayer> = ({showToast}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <VStack position={"absolute"} w={"100%"} bottom={55}>
      <HStack
        alignItems={"center"}
        justifyContent={"space-between"}
        bg="background.100"
        borderRadius={10}
        p={2}
        mx={1}
        flex={1}>
        <HStack flex={1} alignItems={"center"} space={2}>
          <ImageContainer borderRadius={5} size={50} />
          <VStack flex={1}>
            <Text
              color={"lightgrey"}
              textTransform={"capitalize"}
              fontWeight={"500"}
              fontSize={"sm"}>
              awdaw asef
            </Text>
            <Text
              color={"lightgrey"}
              textTransform={"capitalize"}
              fontSize={"xs"}>
              awdaw
            </Text>
          </VStack>
        </HStack>
        <HStack px={2} space={4} alignItems="center">
          <Pressable
            onPress={() => {
              if (!isLiked) {
                showToast("Added to liked songs");
              } else {
                showToast("Removed from liked songs");
              }
              setIsLiked(isLiked => !isLiked);
            }}>
            {({isPressed}) => {
              return (
                <Icon
                  name={!isLiked ? "favorite-outline" : "favorite"}
                  size={25}
                  color={isPressed ? "lightgrey" : "white"}
                />
              );
            }}
          </Pressable>
          <Pressable
            onPress={() => {
              setIsPlaying(isPlaying => !isPlaying);
            }}>
            {({isPressed}) => {
              return (
                <Icon
                  name={!isPlaying ? "play-arrow" : "pause"}
                  size={30}
                  color={isPressed ? "lightgrey" : "white"}
                />
              );
            }}
          </Pressable>
        </HStack>
      </HStack>
      <Progress
        style={{
          transform: [{rotateY: "180deg"}],
        }}
        position={"relative"}
        colorScheme="light"
        bottom="2px"
        value={45}
        h={"2px"}
        mx={4}
      />
    </VStack>
  );
};

export default MiniPlayer;
