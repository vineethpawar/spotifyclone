import {ScrollView, Text, VStack} from "native-base";
import React from "react";
import {CategoriesGrid} from "../components/search/CategoriesGrid";
import SearchBar from "../components/search/SearchBar";
export const SearchScreen: React.FC = () => {
  const data = [
    {id: 1, genre: "pop"},
    {id: 2, genre: "hip-hop"},
    {id: 3, genre: "bollywood"},
  ];
  return (
    <ScrollView bg="background.200" py={5}>
      <VStack my={5} px={3}>
        <Text fontSize={"32px"} color="lightgrey" fontWeight="700">
          Search
        </Text>
        <SearchBar />
      </VStack>

      <CategoriesGrid title="Your top genres" data={[...data, ...data]} />
      <CategoriesGrid title="Your top genres" data={data} />
      <CategoriesGrid title="Your top genres" data={data} />
      <VStack h={true ? 40 : 20} />
    </ScrollView>
  );
};
