/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from "native-base";
import React, {useState} from "react";
import {StatusBar} from "react-native";
import Navigator from "./src/navigator";
import MiniPlayer from "./src/components/common/MiniPlayer";
import theme from "./src/theme";
import {Toasts} from "./src/utils/Toasts";

const App = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const showToast = (title: string) => {
    setToastTitle(title);
    setIsToastOpen(true);
    setTimeout(() => {
      setIsToastOpen(false);
    }, 2000);
  };
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#1b7d3c"} />
      <Navigator />
      <MiniPlayer showToast={showToast} />
      <Toasts isToastOpen={isToastOpen} toastTitle={toastTitle} />
    </NativeBaseProvider>
  );
};

export default App;
