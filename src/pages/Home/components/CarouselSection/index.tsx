import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselSectionContainer } from './styles';
import { useEffect } from 'react';

export const CarouselSection = () => {
  useEffect(() => {
    new Swiper('.swiper1', {
      slidesPerView: 3,
      loop: false,
      modules: [Navigation],
      effect: 'coverflow',
      coverflowEffect: {
        // slideShadows: false,
      },
      // slidesOffsetAfter: 500,
      speed: 700,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);
  return (
    <CarouselSectionContainer>
      <div className='swiper swiper1'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>
            <img
              src={
                'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
          <div className='swiper-slide'>
            <img
              src={
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
          <div className='swiper-slide'>
            <img
              src={
                'https://images.unsplash.com/photo-1623005399662-b55f006328c2?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
          <div className='swiper-slide'>
            <img
              src={
                'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
          <div className='swiper-slide'>
            <img
              src={
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
          <div className='swiper-slide'>
            <img
              src={
                'https://images.unsplash.com/photo-1623005399662-b55f006328c2?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
          <div className='swiper-slide'>
            <img
              src={
                'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
          <div className='swiper-slide'>
            <img
              src={
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
          <div className='swiper-slide'>
            <img
              src={
                'https://images.unsplash.com/photo-1623005399662-b55f006328c2?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt=''
            />
          </div>
        </div>
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>
    </CarouselSectionContainer>
  );
};
