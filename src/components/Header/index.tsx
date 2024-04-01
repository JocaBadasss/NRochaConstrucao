import { HeaderContainer } from './styles';
import Logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

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

      <nav>
        <a href='#'>Home</a>
        <a href='#'>Serviços</a>
        <a href='#'>Sobre nós</a>
        <a href='#'>Contato</a>
      </nav>
    </HeaderContainer>
  );
};
