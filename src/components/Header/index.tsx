import { HeaderContainer, MenuBurger } from './styles';
import Logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';

import useWidth from '../../hooks/useResize';

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const Width = useWidth();

  const handleScrollDown = () => {
    if (window.scrollY !== 0) {
      setIsScrolling(true);
    }

    if (window.scrollY == 0) {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollDown);
  }, [isScrolling]);
  return (
    <HeaderContainer isScrolling={isScrolling}>
      <img
        src={Logo}
        alt=''
      />

      <MenuBurger>
        <div />
        <div />
        <div />
      </MenuBurger>

      {Width >= 1024 && (
        <nav>
          <a href='#'>HOME</a>
          <a href='#'>SERVIÇOS</a>
          <a href='#'>SOBRE NÓS</a>
          <a href='#'>CONTATO</a>
        </nav>
      )}
    </HeaderContainer>
  );
};
