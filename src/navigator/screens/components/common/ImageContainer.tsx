import React from "react";
import {Image} from "native-base";
import {ImageResizeMode} from "react-native";
interface ImageContainer {
  source?: string;
  alt?: string;
  size?: string | number;
  resizeMode?: ImageResizeMode;
  borderRadius?: number;
}
export const ImageContainer: React.FC<ImageContainer> = props => {
  const {
    source = "https://www.w3schools.com/css/img_lights.jpg",
    alt = "default text",
    size = 50,
    resizeMode = "cover",
    borderRadius,
  } = props;

  return (
    <Image
      source={{uri: source}}
      alt={alt}
      size={size}
      resizeMode={resizeMode}
      borderRadius={borderRadius}
    />
  );
};
