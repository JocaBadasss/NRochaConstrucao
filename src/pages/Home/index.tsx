import { Header } from '../../components/Header';
import {
  AboutUs,
  Caption,
  Card,
  Cards,
  Footer,
  HomeContainer,
  ImageSection,
  Overlay,
  ServicesSection,
} from './styles';
import CarroselImage1 from '../../assets/CarroselImage1.png';
import Builders from '../../assets/builder.jpg';

import FeatherIcon from '../../assets/FeatherIcon.svg';

import { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
import { CarouselSection } from './components/CarouselSection';

export const Home = () => {
  const [captionContent, setCaptionContent] = useState({
    title: 'ACABAMENTO FINO',
    subtitle: 'PERFEIÇÃO',
  });

  useEffect(() => {
    const swiper = new Swiper('.swiper2', {
      slidesPerView: 1,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      speed: 700,
      autoplay: {
        delay: 3000,
      },
      on: {
        slideChange: () => {
          const captions = [
            { title: 'ACABAMENTO FINO', subtitle: 'PERFEIÇÃO' },
            { title: 'DESIGN INOVADOR', subtitle: 'MODERNIDADE' },
            { title: 'QUALIDADE COMPROVADA', subtitle: 'CONFIANÇA' },
          ];

          setCaptionContent(captions[swiper.activeIndex]);
        },
      },
    });
  }, []);

  return (
    <HomeContainer>
      <Header />
      <main>
        <ImageSection>
          <Overlay />
          <Caption key={captionContent.title}>
            <h1>{captionContent.title}</h1>
            <p>{captionContent.subtitle}</p>
          </Caption>
          <div className='swiper swiper2'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <img
                  src={CarroselImage1}
                  alt=''
                />
              </div>
              <div className='swiper-slide'>
                <img
                  src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                />
              </div>
              <div className='swiper-slide'>
                <img
                  src='https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                />
              </div>
            </div>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </div>
        </ImageSection>
        <ServicesSection>
          <h1>NOSSOS SERVIÇOS</h1>

          <Cards>
            <Card>
              <div className='icon-wrapper'>
                <img
                  src={FeatherIcon}
                  alt=''
                />
              </div>

              <h1>ACABAMENTO FINO</h1>
              <p>
                O acabamento é fino e a pica também. Na <strong>NRocha</strong>
                &nbsp; tudo será acabado, inclusive sua vida!
              </p>
            </Card>
            <Card>
              <div className='icon-wrapper'>
                <img
                  src={FeatherIcon}
                  alt=''
                />
              </div>

              <h1>CONSTRUÇÕES</h1>
              <p>
                O acabamento é fino e a pica também. Na <strong>NRocha</strong>
                &nbsp; tudo será acabado, inclusive sua vida!
              </p>
            </Card>
            <Card>
              <div className='icon-wrapper'>
                <img
                  src={FeatherIcon}
                  alt=''
                />
              </div>

              <h1>REFORMAS</h1>
              <p>
                O acabamento é fino e a pica também. Na <strong>NRocha</strong>
                &nbsp; tudo será acabado, inclusive sua vida!
              </p>
            </Card>
          </Cards>
        </ServicesSection>
        <AboutUs>
          <img
            src={Builders}
            alt=''
          />
          <div>
            <h1>SOBRE NÓS</h1>
            <p>
              A <strong>NROCHA</strong> está há mais de 30 anos no mercado
              trabalhando com construçoes e reformas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum minima qui, magnam
              officia quisquam rerum eveniet nostrum illo. Ipsa rerum ad facilis
              magni consequuntur minus officiis voluptatibus maiores dolores
              necessitatibus?
            </p>
          </div>
        </AboutUs>
        <CarouselSection />
      </main>
      <Footer>
        <div>
          <p>
            Copyright © 2024 - NROCHA. Todos os direitos reservados. &nbsp; •
            &nbsp; Rua General Lauro Sodré &nbsp; • &nbsp; Lorem, ipsum dolor
            sit amet Nisi iusto est &nbsp; • &nbsp; Consectetur adipisicing
            elit.&nbsp; • &nbsp; Desenvolvido por: JocaBadass
          </p>
        </div>
      </Footer>
    </HomeContainer>
  );
};
