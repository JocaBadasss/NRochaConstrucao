import { useEffect, useState } from 'react';

const useWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [windowWidth]);

  return windowWidth;
};

export default useWidth;
