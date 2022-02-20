import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: #222831;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: #F05454;
    .scroll-content {
      background-color: #222831;
    }
    .scrollbar-track.scrollbar-track-y {
      background:  #c;
      .scrollbar-thumb-y {
        background: #F05454;
      }
    }
  }
`;
export default GlobalStyles;
