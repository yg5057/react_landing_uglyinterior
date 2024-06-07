import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  /* font */
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Krona One';
    src: local('Krona One Regular'), local('KronaOne-Regular'), url(https://fonts.gstatic.com/s/kronaone/v9/jAnEgHdjHcjgfIb1ZcUCMY-h3cWkWg.ttf) format('truetype');
  }
  @font-face {
    font-family: 'PyeongChang Peace';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
}
  @font-face {
    font-family: 'PyeongChang';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChang-Bold.woff2') format('woff2');
}

  :root {
    /* font */
    --font-size-base: 62.5%; 
    --font-family-primary: 'Pretendard', sans-serif;
    --font-family-secondary: 'Krona One', sans-serif;
    --font-family-tertiary: "PyeongChang Peace";
    --font-family-quaternary: 'PyeongChang';
    /* color */
    --White: #FFFF;
    --Black: #121212;
    --TrialBlack: #000;
    --BG-LightBlue: #F8F9FB;
    --BG-White: #F8F9FC;
    --BG-SkyBlue: #D7E7F5;
    --Sky-Blue: #4597F7;
    --Primary-50: #F0F6FF;
    --Primary-100: #CCE0FF;
    --Primary-200: #99C2FF;
    --Primary-300: #7FB2FF;
    --Primary-400: #4C94FF;
    --Primary-500: #1A75FF;
    --Primary-600: #0066FF;
    --Primary-700: #0052CC;
    --Primary-800: #003D99;
    --Primary-900: #002966;
    --Dark-Blue-50: #80A8FF;
    --Dark-Blue-100: #CCDCFF;
    --Dark-Blue-200: #99B9FF;
    --Dark-Blue-300: #80A8FF;
    --Dark-Blue-400: #4C85FF;
    --Dark-Blue-500: #1A62FF;
    --Dark-Blue-600: #0051FF;
    --Dark-Blue-700: #0041CC;
    --Dark-Blue-800: #003099;
    --Dark-Blue-900: #002066;
    --Neutral-Gray-50: #F9FAFB;
    --Neutral-Gray-100: #F2F4F7;
    --Neutral-Gray-200: #E4E7EC;
    --Neutral-Gray-300: #CED2DA;
    --Neutral-Gray-400: #97A1AF;
    --Neutral-Gray-500: #637083;
    --Neutral-Gray-600: #414E62;
    --Neutral-Gray-700: #344051;
    --Neutral-Gray-800: #202B37;
    --Neutral-Gray-900: #141C24;
    --Selective-Yellow-300: #FCDA83;
    --Selective-Yellow-400: #FBD26A;
    --Selective-Yellow-500: #FFB700;
    --Selective-Yellow-600: #EBA800;
    --Mandarin-Orange-600: #F04F0F;
    --Tangerine-600: #F89007;
    --Majorelle-Blue-600: #4426D9;
    --Amethyst-Purple-600: #9126D9;
      /* Gradient */
    --Gradient-Primary: linear-gradient(80deg, #1975FF 0%, #33A9FF 100%);
    --Gradient-Silky-Blue-Gradient: linear-gradient(81deg, #F8F9FB 0%, #DBE5FA 83%, #C8D9F9 100%);
    --Gradient-Dark-Blue-Gradient: linear-gradient(81deg, #1A62FF 0%, #0041CC 100%);
    --Gradient-Mandarin-Orange-Gradient: linear-gradient(81deg, #F3733F 0%, #F73B3B 100%);
    --Gradient-Majorelle-Blue-Gradient: linear-gradient(81deg, #6952E0 0%, #A752E0 100%);
    --Gradient-Amethyst-Purple-Gradient: linear-gradient(81deg, #A752E0 0%, #F042BC 100%);
    --Gradient-Tangerine-Gradient: linear-gradient(81deg, #F80 0%, #FFB700 100%);
    /* DropShadow */
    --DropShadow-OnDark-XS:  0px 1px 2px 0px rgba(0, 0, 0, 0.23);
    --DropShadow-OnDark-S: 0px 2px 6px 0px rgba(0, 0, 0, 0.16);
    --DropShadow-OnDark-M: 0px 6px 12px 0px rgba(0, 0, 0, 0.13);
    --DropShadow-OnDark-L: 0px 17px 33px -2px rgba(0, 0, 0, 0.14);
    --DropShadow-OnDark-XL: 0px 25px 40px -10px rgba(0, 0, 0, 0.16);
    --DropShadow-OnDark-XXL: 0px 25px 60px -10px rgba(0, 0, 0, 0.20);
    --DropShadow-OnLight-XS: 0px 1px 2px 0px rgba(28, 39, 49, 0.08);
    --DropShadow-OnLight-S: 0px 2px 6px 0px rgba(28, 39, 49, 0.08);
    --DropShadow-OnLight-M: 0px 6px 12px 0px rgba(28, 39, 49, 0.05);
    --DropShadow-OnLight-L: 0px 17px 33px -2px rgba(28, 39, 49, 0.05);
    --DropShadow-OnLight-XL: 0px 25px 40px -10px rgba(28, 39, 49, 0.08);
    --DropShadow-OnLight-XXL: 0px 25px 60px -10px rgba(28, 39, 49, 0.12);
  }

  /* common */
  html { font-size: var(--font-size-base); }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: var(--font-family-primary);
    background-color: #ffff;
    -ms-overflow-style: scroll;
  }
  ::-webkit-scrollbar { display: none; } 

  * {   
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
