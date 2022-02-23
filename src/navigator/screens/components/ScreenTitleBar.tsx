import {Box, Heading, HStack, Pressable, Text} from "native-base";
import {IHStackProps} from "native-base/lib/typescript/components/primitives/Stack/HStack";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {ImageContainer} from "./common/ImageContainer";
interface IIconList {
  iconName: string;
  iconSize: number;
  iconFunction?: () => void;
  iconProps?: any;
}

interface ScreenTitleBar {
  title: string;
  dp?: string;
  icons?: IIconList[];
}
export const ScreenTitleBar: React.FC<ScreenTitleBar> = ({
  title,
  dp = "",
  icons = [],
}) => {
  return (
    <HStack alignItems={"center"}>
      <Box mr={4} mt={"-4px"}>
        {!!dp.length && (
          <ImageContainer size={35} borderRadius={100} source={dp} />
        )}
      </Box>
      <HStack alignItems={"center"} justifyContent={"space-between"} flex={1}>
        {/* @ts-ignore */}
        <Text variant="heading" fontSize={25} lineHeight={25}>
          {title}
        </Text>
        <HStack space={1} alignItems={"center"}>
          {icons.map(icon => (
            <Pressable>
              {({isPressed}) => {
                return (
                  <Box p={2} key={icon.iconName} {...icon.iconProps}>
                    <Icon
                      name={icon.iconName}
                      size={icon.iconSize}
                      color={isPressed ? "lightgrey" : "white"}
                    />
                  </Box>
                );
              }}
            </Pressable>
          ))}
        </HStack>
      </HStack>
    </HStack>
  );
};
