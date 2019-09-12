import React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle
} from 'styled-components';

export const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1366
  },
  spacing: {
    0: '0',
    1: '2px',
    2: '4px',
    3: '8px',
    4: '12px',
    5: '16px',
    6: '24px',
    7: '32px',
    8: '40px',
    9: '48px',
    10: '10px',
    20: '20px',
    30: '30px',
    40: '40px',
    50: '50px',
    60: '60px',
    70: '70px',
    80: '80px',
    90: '90px',
    100: '100px',
    110: '110px',
    120: '120px',
    130: '130px',
    140: '140px',
    150: '150px',
    160: '160px'
  },
  colors: {
    white: '#fff',
    black: '#000',
    textMid: '#333',
    whiteLight: 'rgba(255, 255, 255, .9)',
    blackLight: 'rgba(0, 0, 0, .85)',
    gray: 'rgb(221, 221, 221)',
    red: '#c00',
    darkGray: '#bbb'
  },
  transition: {
    fast: '0.1s',
    mid: '0.25s',
    slow: '0.4s',
    slower: '0.5s'
  },
  type: {
    font: {
      helvetica: `Helvetica, -apple-system, Arial, Roboto`
    },
    fontSize: {
      smaller: '12px',
      default: '14px',
      bigger: '16px'
    },
    headingSize: {
      small: '20px',
      default: '24px',
      bigger: '28px'
    },
    fontWeight: {
      regular: 400,
      submedium: 500,
      medium: 600,
      demibold: 700,
      bold: 800
    },
    lineHeight: {
      default: 1.6,
      solid: 1,
      title: 1.25,
      copy: 1.5,
      more: 1.7
    }
  },
  animations: {
    transitions: {
      standard: 'all .15s ease-in',
      slower: 'all .3s ease-in'
    },
    transforms: {
      normalHorizontal: 'translateX(0px)',
      normalVertical: 'translateY(0px)',
      grow: 'scale(1.2)',
      jump: 'translateY(-5px)',
      fullAndHalfLeft: 'translateX(-150%)',
      fullAndHalfRight: 'translateX(150%)'
    }
  },
  boxShadows: {
    standard: '0px 5px 5px rgba(0, 0, 0, .3)'
  },
  zindexNeg: -90,
  zindex0: -1,
  zindex1: 10,
  zindex2: 20,
  zindex3: 30,
  zindex4: 40,
  zindex5: 50,
  zindex6: 60,
  zindex7: 70,
  zindex8: 80,
  zindex9: 90
};

const GlobalStyle = createGlobalStyle`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  button,hr,input{overflow:visible}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}details,main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none},

  html, body {
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.type.font.helvetica};
    background-color: ${theme.colors.white};
    color: ${theme.colors.textMid};
    font-family: ${theme.type.font.helvetica};
    line-height: ${theme.type.lineHeight.default};
    -webkit-font-smoothing: subpixel-antialiased;

    &.is-locked {
      overflow: hidden;
    }

    &.sb-show-main {
      background-color: #fff;
      padding: 3vw;
    }
  }

  strong {
    font-weight: ${theme.type.fontWeight.medium};
  }

  .horizontal-rule {
    background-color: ${theme.colors.black};
    border: none;
    height: 1px;
    margin: 0;
  }

  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap; /* 1 */
  }
`;

const ThemeProvider = props => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
    </React.Fragment>
  );
};

export default ThemeProvider;
