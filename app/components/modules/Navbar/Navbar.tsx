import { useRef, MutableRefObject } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Brand from '@element/Brand/Brand';
import Icon, { Icons } from '@element/Icon/Icon';
import Tooltip, { TooltipDirection } from '@element/Tooltip/Tooltip';
import { ThemeProvider } from '@context/themeContext';
import useDarkMode from '@hook/useDarkMode';
import useDetectOutsideClick from '@hook/useDetectOutsideClick';
import { useSidenav } from '@context/sidenavContext';

import MenuButton from '@element/MenuButton/MenuButton';
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
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.div
            key={isDark ? 'dark-icon' : 'light-icon'}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? (
              <Icon icon={Icons.SUN} onClick={setIsDark} />
            ) : (
              <Icon icon={Icons.MOON} onClick={setIsDark} />
            )}
          </motion.div>
        </AnimatePresence>
      </Tooltip>
    </div>
  );
};

const Navbar = () => {
  const settingsRef = useRef(null);
  const [settingsActive, setSettingsActive] = useDetectOutsideClick(
    settingsRef,
    false
  );

  const { dispatch, state } = useSidenav();

  return (
    <nav className="relative items-center w-full p-3 px-5 shadow-md bg1 text color-transition grid grid-cols-3">
      <div className="flex items-center justify-start space-x-12 lg:font-semibold lg:tracking-wider">
        <MenuButton
          className="text hover-icon"
          height="20"
          width="30"
          onClick={() => dispatch({ type: 'toggle' })}
          isOpen={state.isActive}
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
