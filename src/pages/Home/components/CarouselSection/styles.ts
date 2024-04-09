import { styled } from 'styled-components';

export const CarouselSectionContainer = styled.section`
  padding: 2rem;

  .swiper1 {
    width: 90%;
    .swiper-button-prev,
    .swiper-button-next {
      color: ${({ theme }) => theme.COLORS.BLACK_300};
      &:hover {
        transform: scale(1.2, 1.2);
      }
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;

      > img {
        display: block;
        width: 100%;
      }
    }
  }
`;
