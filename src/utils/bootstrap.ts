import {createGlobalStyle} from "../theme/StyledComponents";

let initialized = false;

function bootstrap() {
  if (!initialized) {
    // tslint:disable-next-line:no-unused-expression
    createGlobalStyle`
      @-ms-viewport {
        width: device-width;
      }

      html {
        box-sizing: border-box;
        -ms-overflow-style: scrollbar;
      }

      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
    `;
    initialized = true;
  }
}

bootstrap();
