import { useRef, MutableRefObject } from 'react';

import Brand from '@element/Brand/Brand';
import Icon, { Icons } from '@element/Icon/Icon';
import Tooltip, { TooltipDirection } from '@element/Tooltip/Tooltip';
import { ThemeProvider } from '@context/themeContext';
import useDarkMode from '@hook/useDarkMode';
import useDetectOutsideClick from '@hook/useDetextOutsideClick';

import styles from './Navbar.module.scss';

type NavItemProps = { children: React.ReactNode };

const NavItem = ({ children }: NavItemProps) => (
  <div className="hidden lg:flex lg:items-center lg:space-x-4 hover-icon">
    {children}
  </div>
);

type SettingsMenuProps = {
  isActive: boolean;
  toggleRev: MutableRefObject<any>;
};

const SettingsMenu = ({ isActive, toggleRev }: SettingsMenuProps) => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div
      ref={toggleRev}
      className={`${styles.settings} ${
        isActive && styles.active
      } absolute ml-8 top-32 p-5 right-5 shadow-lg justify-end color-transition`}
    >
      <Tooltip tooltip="Theme" direction={TooltipDirection.LEFT}>
        {isDark ? (
          <Icon icon={Icons.SUN} onClick={setIsDark} />
        ) : (
          <Icon icon={Icons.MOON} onClick={setIsDark} />
        )}
      </Tooltip>
    </div>
  );
};

type NavbarProps = { openSidenav?: VoidFunction };

const Navbar = ({ openSidenav }: NavbarProps) => {
  const settingsRef = useRef(null);
  const [settingsActive, setSettingsActive] = useDetectOutsideClick(
    settingsRef,
    false
  );

  return (
    <nav className="relative items-center p-3 shadow-md bg1 text color-transition grid grid-cols-3">
      <div className="flex justify-start space-x-12 lg:font-semibold lg:tracking-wider">
        <Icon
          icon={Icons.BURGER}
          onClick={openSidenav}
          size={{ width: 30, height: 30 }}
        />

        <NavItem>
          <Icon icon={Icons.CHEVRON_LEFT} size={{ width: 22, height: 22 }} />
          <span>Vorherige</span>
        </NavItem>

        <NavItem>
          <span>Nächste</span>
          <Icon icon={Icons.CHEVRON_RIGHT} size={{ width: 22, height: 22 }} />
        </NavItem>
      </div>

      <Brand href={'/'} className="justify-center" />

      <div className="flex justify-end lg:space-x-5">
        <Tooltip tooltip="Diskussion" direction={TooltipDirection.BOTTOM_LEFT}>
          <Icon icon={Icons.CHAT} className="hidden lg:flex" />
        </Tooltip>
        <Tooltip
          tooltip="Einstellungen"
          direction={TooltipDirection.BOTTOM_LEFT}
        >
          <Icon
            icon={Icons.SETTINGS}
            onClick={() => setSettingsActive(!settingsActive)}
          />
        </Tooltip>
      </div>

      <ThemeProvider>
        <SettingsMenu toggleRev={settingsRef} isActive={settingsActive} />
      </ThemeProvider>
    </nav>
  );
};

export default Navbar;
