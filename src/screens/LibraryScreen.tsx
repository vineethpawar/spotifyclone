import {
  Actionsheet,
  Box,
  FlatList,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React, {useState} from "react";
import {ScreenTitleBar} from "../components/common/ScreenTitleBar";
import Icon from "react-native-vector-icons/MaterialIcons";
import {ItemClick} from "native-base/lib/typescript/components/composites/Typeahead/useTypeahead/types";
import SliderListItem from "../components/common/SliderListItem";
export const LibraryScreen: React.FC = () => {
  const [sortByModalOpen, setSortByModalOpen] = useState(false);
  const [w, setW] = useState<number>();
  const tags = [
    {id: 1, tag: "playlists"},
    {id: 2, tag: "artists"},
    {id: 3, tag: "artists"},
    {id: 4, tag: "artists"},
    {id: 5, tag: "artists"},
    {id: 6, tag: "artists"},
    {id: 7, tag: "artists"},
    {id: 8, tag: "artists"},
  ];
  return (
    <VStack bg="background.200" flex={1}>
      <VStack
        px={3}
        pb={4}
        pt={6}
        borderBottomColor={"gray.900"}
        borderBottomWidth={1}
        space={2}>
        <ScreenTitleBar
          dp="https://wallpaperaccess.com/full/317501.jpg"
          title="Your Library"
          icons={[
            {iconName: "search", iconSize: 30, iconProps: {mt: "2px"}},
            {iconName: "add", iconSize: 35},
          ]}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tags.map(tag => (
            <Pressable
              key={tag.id}
              py={2}
              px={3}
              mr={3}
              borderRadius={30}
              borderWidth={1}
              borderColor={"white"}
              _pressed={{borderColor: "gray.400"}}>
              {({isPressed}) => {
                return (
                  <Box
                    opacity={isPressed ? 0.8 : 1}
                    _text={{color: "lightgrey", textTransform: "capitalize"}}>
                    {tag.tag}
                  </Box>
                );
              }}
            </Pressable>
          ))}
        </ScrollView>
      </VStack>
      <ScrollView pb={5} flex={1}>
        <HStack px={3} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"}>
            <Pressable onPress={() => setSortByModalOpen(true)} p={1} mb={1}>
              {({isPressed}) => {
                return (
                  <HStack
                    alignItems={"center"}
                    space={2}
                    opacity={isPressed ? 0.8 : 1}
                    style={{
                      transform: [{scale: isPressed ? 0.99 : 1}],
                    }}>
                    <Icon name="sort" size={30} color={"lightgrey"} />
                    <Text color={"lightgrey"}>Recently played</Text>
                  </HStack>
                );
              }}
            </Pressable>
          </HStack>
          <Pressable p={1} mb={1}>
            {({isPressed}) => {
              return (
                <Box
                  opacity={isPressed ? 0.8 : 1}
                  style={{
                    transform: [{scale: isPressed ? 0.99 : 1}],
                  }}>
                  <Icon name="list" size={30} color={"white"} />
                </Box>
              );
            }}
          </Pressable>
        </HStack>
        {true ? (
          <FlatList
            key={"_"}
            data={[1, 2, 3]}
            numColumns={2}
            renderItem={({item}) => (
              <Box flex={0.5} maxWidth={"50%"}>
                <Box onLayout={e => setW(e?.nativeEvent?.layout?.width)} m={3}>
                  <SliderListItem type={"libraryGrid"} isLoaded={false} w={w} />
                </Box>
              </Box>
            )}
          />
        ) : (
          <FlatList
            key={"#"}
            data={[1, 2, 3]}
            numColumns={1}
            renderItem={({item}) => (
              <Box bg={"red.600"} flex={0.5} m={2}>
                {item}
              </Box>
            )}
          />
        )}

        <VStack h={true ? "200px" : "115px"} />
      </ScrollView>

      <Actionsheet
        isOpen={sortByModalOpen}
        onClose={() => setSortByModalOpen(false)}>
        <Actionsheet.Content px={3}>
          {/* @ts-ignore */}
          <Text px={2} mb={5} variant="heading" mr={"auto"}>
            Sort by
          </Text>
          <VStack w={"100%"} space={1}>
            <Pressable onPress={() => setSortByModalOpen(false)}>
              {({isPressed}) => {
                return (
                  <HStack
                    borderRadius={5}
                    p={2}
                    bg={isPressed ? "gray.800" : "gray.700"}
                    justifyContent={"space-between"}
                    alignItems={"center"}>
                    <Text color="white">Recently added</Text>
                    <Icon name="check" size={30} color={"white"} />
                  </HStack>
                );
              }}
            </Pressable>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </VStack>
  );
};
