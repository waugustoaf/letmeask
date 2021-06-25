import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [prop: string]: string;
    };
    hovers: {
      [prop: string]: string;
    };
  }
}
