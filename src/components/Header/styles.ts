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

  @media (max-width: 1024px) {
    padding: 2rem 2rem;

    > img {
      height: 4rem;
    }
  }
`;

export const MenuBurger = styled.button`
  position: static;
  z-index: 999999999999999;

  width: 2.6rem;
  height: 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: none;
  border: none;

  > div {
    position: relative;

    width: 1.95rem;
    height: 0.2rem;
    border-radius: 99rem;
    transition: all 0.3s linear;
    transform-origin: 1px;

    background-color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  /* :first-child {
    transform: ${({ $menuisopen }) =>
    $menuisopen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({ $menuisopen }) => ($menuisopen ? '0' : '1')};
    transform: ${({ $menuisopen }) =>
    $menuisopen ? 'translateX(20px)' : 'translateX(0)'};
  }

  :nth-child(3) {
    transform: ${({ $menuisopen }) =>
    $menuisopen ? 'rotate(-45deg)' : 'rotate(0)'};
  } */

  @media (min-width: 1024px) {
    display: none;
  }
`;
