import { keyframes, styled } from 'styled-components';

const FadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HomeContainer = styled.div`
  /* .swiper::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    pointer-events: none;
    z-index: 3;
    background: rgba(0, 0, 0, 0.5);
  } */

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    &:hover {
      transform: scale(1.2, 1.2);
    }
    width: 5rem;
  }
`;

export const ImageSection = styled.section`
  img {
    width: 100%;
    height: 100vh;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  pointer-events: none;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
`;

export const Caption = styled.div`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-family: 'Poppins';
  color: #fff;
  font-style: normal;

  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 6rem;
    line-height: 6.4rem;
    animation: ${FadeInLeft} 1s;
    transition: all 1s;
  }

  p {
    font-weight: 300;
    font-size: 4.8rem;
    line-height: 5.2rem;
    animation: ${FadeInRight} 1s;
    transition: all 1s;
  }
`;

export const ServicesSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 4rem 0 2.4rem;

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_CONDENSED};
    font-weight: bold;
    font-size: 4rem;

    color: ${({ theme }) => theme.COLORS.BLACK_300};

    margin: 0 0 2.4rem;
  }
`;

export const Cards = styled.div`
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 0.8rem;

  width: 35rem;

  > h1 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.8rem;
    font-weight: 200;
  }

  > p {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-weight: 200;
    font-size: 1.4rem;
    text-align: center;
  }

  .icon-wrapper {
    width: 6rem;
    height: 4.8rem;

    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.ORANGE_DEFAULT};
  }
`;
