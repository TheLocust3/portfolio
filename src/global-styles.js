import { injectGlobal } from 'emotion';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: 'Noto Sans', sans-serif;
        position: relative;
    }

    .mdc-button {
        height: 45px;
    
        text-transform: none;
    }

    .mdc-floating-label {
        font-weight: 300;
    }
    
    .mdc-text-field__input {
        font-weight: 300;
    }
    
    .mdc-typography--headline1,
    .mdc-typography--headline2,
    .mdc-typography--headline3,
    .mdc-typography--headline4,
    .mdc-typography--headline5,
    .mdc-typography--headline6,
    .mdc-typography--body1,
    .mdc-typography--body2 {
        font-weight: 300;
    }
`;