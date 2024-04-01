import { styled } from 'styled-components';

type scrollingProps = {
  isScrolling: boolean;
};

export const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'isScrolling',
})<scrollingProps>`
  width: 100%;
  /* height: ${({ isScrolling }) => (isScrolling ? '8rem' : 'unset')}; */

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme, isScrolling }) =>
    isScrolling ? theme.COLORS.BLACK_300 : `transparent`};

  padding: 2rem 9.9rem;

  position: fixed;
  z-index: 9999;

  /* transition: all 0.7s; */
  transition: height 2s, background-color 0.7s;

  /* animation: ${({ isScrolling }) =>
    isScrolling ? 'scrolling 0.5s' : 'none'}; */

  > img {
    height: ${({ isScrolling }) => (isScrolling ? '4rem' : '7.3rem')};
    transition: height 0.7s; // Adicione transição suave à imagem também, se necessário
  }

  > nav {
    display: flex;
    gap: 2.7rem;
  }

  > nav a {
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.ORANGE_DEFAULT};

    text-decoration: none;
  }
`;
