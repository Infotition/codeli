import { useState } from 'react';
import Brand from '@element/Brand/Brand';
import Icon, { Icons } from '@element/Icon/Icon';
import styles from './Navbar.module.scss';

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <div
    className={
      'hidden lg:flex lg:items-center lg:space-x-4 transition-colors duration-500 ease-in-out hover:text-primary cursor-pointer'
    }
  >
    {children}
  </div>
);

const CourseSelection = () => (
  <div
    className={
      'flex space-x-12 justify-start lg:font-semibold lg:tracking-wider'
    }
  >
    <Icon icon={Icons.BURGER} size={{ width: 30, height: 30 }} />
    <NavItem>
      <Icon icon={Icons.CHEVRON_LEFT} size={{ width: 22, height: 22 }} />
      <span>Vorherige</span>
    </NavItem>
    <NavItem>
      <span>Nächste</span>
      <Icon icon={Icons.CHEVRON_RIGHT} size={{ width: 22, height: 22 }} />
    </NavItem>
  </div>
);

const SettingsMenu = ({ isActive }: { isActive: boolean }) => (
  <div
    className={`${styles.settings} ${
      isActive && styles.active
    } absolute bg-bg2-dark w-60 h-60 top-32 right-5`}
  >
    Test
  </div>
);

const Navbar = () => {
  const [settingsActive, setSettingsActive] = useState(false);

  return (
    <div
      className={
        'dark:text-text-dark text-text-light bg-bg2-dark grid grid-cols-3 p-3 px-5 items-center text-center shadow-md'
      }
    >
      <CourseSelection />

      <Brand href={'/'} className={'justify-center'} />

      <div className={'flex justify-end lg:space-x-5'}>
        <Icon icon={Icons.CHAT} className={`hidden lg:flex`} />
        <Icon
          icon={Icons.SETTINGS}
          onClick={() => setSettingsActive(!settingsActive)}
        />
      </div>

      <SettingsMenu isActive={settingsActive} />
    </div>
  );
};

export default Navbar;
