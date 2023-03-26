import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textColor: string;
      mainColor: string;
      secondaryColor: string;
      thirdColor: string;
      fourthColor: string;
    };
  }
}
