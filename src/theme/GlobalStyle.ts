import {createGlobalStyle} from 'styled-components';
import './style.css';

const GlobalStyle = createGlobalStyle`
html {
    overflow: scroll;
    overflow-x: hidden;
    height: 100vh;
  }

  body, #root {
      height: 100%;
  }


`;

export default GlobalStyle;
