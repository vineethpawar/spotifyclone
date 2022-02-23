import {Box, FlatList, HStack, Pressable, Text, VStack} from "native-base";
import React from "react";
import {ImageContainer} from "./common/ImageContainer";
interface CategoryItem {
  id: number;
  genre: string;
}
interface CategoriesGrid {
  title: string;
  data: CategoryItem[];
}
export const CategoriesGrid: React.FC<CategoriesGrid> = ({title, data}) => {
  return (
    <VStack my={3}>
      <Text mb={2} px={3} color="lightgrey" fontWeight={"bold"} fontSize={18}>
        Your top genres
      </Text>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={data => data.id}
        renderItem={({item}) => (
          <Pressable p={2} flex={1} maxW={"50%"}>
            {({isPressed}) => {
              return (
                <Box
                  style={{
                    opacity: isPressed ? 0.8 : 1,
                    transform: [{scale: isPressed ? 0.98 : 1}],
                  }}
                  borderRadius={10}
                  bg="red.800"
                  h={"80px"}
                  overflow={"hidden"}>
                  <HStack>
                    <Text
                      p={3}
                      noOfLines={3}
                      flex={1}
                      color="lightgrey"
                      lineHeight={"xs"}
                      fontSize={"md"}
                      textTransform={"capitalize"}
                      fontWeight={"bold"}>
                      {title}
                    </Text>
                    <Box
                      mt={"-5%"}
                      mr={"-10%"}
                      borderColor="transparent"
                      borderWidth={"2px"}>
                      <ImageContainer borderRadius={5} size={"70px"} />
                    </Box>
                  </HStack>
                </Box>
              );
            }}
          </Pressable>
        )}
      />
    </VStack>
  );
};

export default CategoriesGrid;
