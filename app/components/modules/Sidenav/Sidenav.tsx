import { MutableRefObject } from 'react';

type NavbarProps = { active: boolean; sidenavRef: MutableRefObject<any> };

const Sidenav = ({ active, sidenavRef }: NavbarProps) => {
  return (
    <nav
      ref={sidenavRef}
      className={`${
        !active && '-translate-x-full'
      } absolute z-10 h-screen shadow-xl bg1 w-96 transition-transform duration-300 ease-in-out`}
    >
      Test
    </nav>
  );
};

export default Sidenav;
