/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider, VStack} from "native-base";
import React from "react";
import {StatusBar} from "react-native";
import Navigator from "./src/navigator";
import theme from "./src/theme";

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#1b7d3c"} />
      <Navigator />
    </NativeBaseProvider>
  );
};

export default App;
