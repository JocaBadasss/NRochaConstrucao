import { styled } from 'styled-components';

export const CarouselSectionContainer = styled.section`
  padding: 2rem;

  .swiper1 {
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
      /* width: 30rem; */
      /* height: 20rem; */

      img {
        display: block;
        width: 100%;
      }
    }
  }
`;
