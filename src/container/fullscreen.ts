import {createGlobalStyle} from "../theme/StyledComponents";

let applied = false;

export default () => {
  if (!applied) {
    // tslint:disable-next-line:no-unused-expression
    createGlobalStyle`
      html,
      body,
      body > div {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    applied = true;
  }
};
