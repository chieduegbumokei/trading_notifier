import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primaryBg: string;
      secondaryBg: string;
      accentBg: string;
      primary: string;
      secondary: string;
      accent: string;
    };
  }
}
