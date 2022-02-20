import { extendTheme } from "native-base";

const customTheme = extendTheme({ 
    
        colors: {
          // Add new color
          primary: {
            50: '#E3F2F9',
            100: '#C5E4F3',
            200: '#A2D4EC',
            300: '#7AC1E4',
          },
          background:{
              100:"#1b7d3c",
              200:'#080808'
          },
          // Redefinig only one shade, rest of the color will remain same.
          amber: {
            400: '#d97706',
          },
        },   
        
          fontConfig: {
            Montserrat: {
              100: {
                normal: 'Montserrat-Light',
                italic: 'Montserrat-LightItalic',
              },
              200: {
                normal: 'Montserrat-Light',
                italic: 'Montserrat-LightItalic',
              },
              300: {
                normal: 'Montserrat-Light',
                italic: 'Montserrat-LightItalic',
              },
              400: {
                normal: 'Montserrat-Regular',
                italic: 'Montserrat-Italic',
              },
              500: {
                normal: 'Montserrat-Medium',
              },
              600: {
                normal: 'Montserrat-Medium',
                italic: 'Montserrat-MediumItalic',
              },
              // Add more variants
                700: {
                  normal: 'Montserrat-Bold',
                },
                800: {
                  normal: 'Montserrat-Bold',
                  italic: 'Montserrat-BoldItalic',
                },
                900: {
                  normal: 'Montserrat-Bold',
                  italic: 'Montserrat-BoldItalic',
                },
            },
          },
        
          // Make sure values below matches any of the keys in `fontConfig`
          fonts: {
            heading: 'Montserrat',
            body: 'Montserrat',
            mono: 'Montserrat',
          },

          components: {
            
            Heading: {
              // Can pass also function, giving you access theming tools
              baseStyle: ({ colorMode }) => {
                return {
                  color: colorMode === "dark" ? "lightgrey" : "lightgrey",
                  style:{
                    fontSize:27,
                    fontWeight: "700",
                  }
                  
                };
              },
            },
            Text: {
              // Can pass also function, giving you access theming tools
              baseStyle: ({ colorMode }) => {
                return {
                  color: colorMode === "dark" ? "grey" : "grey",
                  fontSize:30,
                  fontWeight: "500",
                };
              },

              variants:{
                commonlyPlayed:{
                  noOfLines:2,
                  flex:1,
                  color:"lightgrey",
                  fontSize:"md",
                  lineHeight:"sm",
                }
              }
              
            },
          },

          config: {
            // Changing initialColorMode to 'dark'
            initialColorMode: 'dark',
          },
})


type CustomThemeType = typeof customTheme;
declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}


export default customTheme