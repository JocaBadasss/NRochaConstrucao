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
  .swiper2 {
    .swiper-button-prev,
    .swiper-button-next {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      &:hover {
        transform: scale(1.2, 1.2);
      }
      width: 5rem;
    }
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

  @media (max-width: 1024px) {
    h1 {
      font-size: 4.8rem;
    }

    p {
      font-size: 3.2rem;
    }
  }
`;

export const ServicesSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 6.4rem 0 6.4rem;

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

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
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

export const AboutUs = styled.section`
  width: 100%;
  height: 40rem;

  margin: 0 0 4rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;

  > img {
    width: 50%;
  }

  > div {
    width: 50%;

    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.8rem;

    padding: 4rem 2.8rem;

    font-family: ${({ theme }) => theme.FONTS.ROBOTO_CONDENSED};

    h1 {
      font-weight: 400;
      font-size: 3.6rem;

      color: ${({ theme }) => theme.COLORS.BLACK_300};
    }

    p {
      width: 50rem;

      font-weight: 300;
      text-align: left;
    }
  }

  @media (max-width: 1024px) {
    > div {
      width: 100%;

      h1 {
        font-size: 2.4rem;
      }

      p {
        width: 36rem;
        font-size: 1.6rem;

        text-align: center;
      }
    }

    > img {
      display: none;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};

  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
