import { useRef, MutableRefObject } from 'react';
import Brand from '@element/Brand/Brand';
import Icon, { Icons } from '@element/Icon/Icon';
import Tooltip, { TooltipDirection } from '@element/Tooltip/Tooltip';

import { ThemeProvider } from '@context/themeContext';
import useDarkMode from '@hook/useDarkMode';
import useDetectOutsideClick from '@hook/useDetextOutsideClick';

import styles from './Navbar.module.scss';

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <div className={'hidden lg:flex lg:items-center lg:space-x-4 hover-icon'}>
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

const SettingsMenu = ({
  isActive,
  _ref,
}: {
  isActive: boolean;
  _ref: MutableRefObject<any>;
}) => {
  const [enabled, setEnabled] = useDarkMode();

  return (
    <div
      ref={_ref}
      className={`${styles.settings} ${
        isActive && styles.active
      } absolute ml-8 top-32 p-5 right-5 shadow-lg flex justify-end color-transition`}
    >
      <Tooltip tooltip="Theme" direction={TooltipDirection.LEFT}>
        {enabled ? (
          <Icon icon={Icons.SUN} onClick={() => setEnabled()} />
        ) : (
          <Icon icon={Icons.MOON} onClick={() => setEnabled()} />
        )}
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

  return (
    <ThemeProvider>
      <div
        className={
          'dark:text-text-dark dark:bg-bg2-dark bg-bg2-light text-text-light grid grid-cols-3 p-3 px-5 items-center text-center shadow-md color-transition'
        }
      >
        <CourseSelection />

        <Brand href={'/'} className={'justify-center'} />

        <div className={'flex justify-end lg:space-x-5'}>
          <Tooltip
            tooltip="Diskussion"
            direction={TooltipDirection.BOTTOM_LEFT}
          >
            <Icon icon={Icons.CHAT} className={`hidden lg:flex`} />
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

        <SettingsMenu _ref={settingsRef} isActive={settingsActive} />
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
