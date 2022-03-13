import {HStack, Pressable, Text} from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export const SearchBar = () => {
  return (
    <Pressable mt={5}>
      {({isPressed}) => {
        return (
          <HStack
            style={{
              transform: [{scale: isPressed ? 0.99 : 1}],
              opacity: isPressed ? 0.9 : 1,
            }}
            borderRadius={10}
            bg="white"
            alignItems={"center"}
            p={2}
            space={2}>
            <Icon name="search" size={34} color="grey" />
            <Text
              lineHeight={"md"}
              fontSize={"md"}
              color="gray.600"
              fontWeight={"600"}>
              Artists, songs, or podcasts
            </Text>
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default SearchBar;
