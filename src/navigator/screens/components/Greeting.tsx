import {Box, Heading, HStack, Pressable} from "native-base";
import {IHStackProps} from "native-base/lib/typescript/components/primitives/Stack/HStack";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Greeting: React.FC<IHStackProps> = props => {
  return (
    <HStack alignItems={"center"} justifyContent={"space-between"} {...props}>
      <Heading>Good morning</Heading>
      <HStack space={5} alignItems={"center"}>
        <Pressable>
          {({isPressed}) => {
            return (
              <Icon
                name="history"
                size={33}
                color={isPressed ? "lightgrey" : "white"}
              />
            );
          }}
        </Pressable>
        <Pressable>
          {({isPressed}) => {
            return (
              <Icon
                name="settings"
                size={30}
                color={isPressed ? "lightgrey" : "white"}
              />
            );
          }}
        </Pressable>
      </HStack>
    </HStack>
  );
};
