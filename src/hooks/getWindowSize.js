import {useRef} from 'react';

export default function WindowSize() {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);
  return (windowWidth.current, windowHeight.current);
}