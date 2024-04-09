import { styled } from 'styled-components';

export const CarouselSectionContainer = styled.section`
  /* width: 100%; */
  padding: 2rem;

  /* height: 40rem; */

  .swiper1 {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: block;
  }

  .swiper1-button-next,
  .swiper1-button-prev {
    /* width: calc(var(--swiper-navigation-size) / 44 * 27); */
    height: var(--swiper-navigation-size);

    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    position: absolute;
    top: var(--swiper-navigation-top-offset, 50%);
    z-index: 10;

    &:hover {
      transform: scale(1.2, 1.2);
    }
  }
  .swiper1-button-prev {
    left: var(--swiper-navigation-sides-offset, 10px);
    right: auto;

    &::after {
      content: 'prev';
    }
  }

  .swiper1-button-next {
    right: var(--swiper-navigation-sides-offset, 10px);
    left: auto;

    &::after {
      content: 'next';
    }
  }

  .swiper1-button-prev::after,
  .swiper1-button-next::after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
  }

  img {
    width: 40rem;
    height: 100%;
  }
`;
