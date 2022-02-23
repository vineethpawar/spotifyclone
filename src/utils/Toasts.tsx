import {HStack, Slide, Text, VStack} from "native-base";
import React from "react";
interface Toasts {
  isToastOpen: boolean;
  toastTitle: string;
}
export const Toasts: React.FC<Toasts> = ({isToastOpen, toastTitle}) => {
  return (
    <Slide in={isToastOpen} placement="bottom" duration={500}>
      <VStack position={"absolute"} bottom={135} w={"100%"} mx="auto">
        <HStack
          py={3}
          px={5}
          alignItems={"center"}
          bg="white"
          mx={2}
          borderRadius={10}>
          <Text fontSize={13} color={"black"}>
            {toastTitle}
          </Text>
        </HStack>
      </VStack>
    </Slide>
  );
};
