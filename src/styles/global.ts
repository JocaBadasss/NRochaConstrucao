import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

 :root {
    font-size: 62.5%;
 }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.COLORS.WHITE_100};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-size: 1.6rem;
    }
`;
