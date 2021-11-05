import useDarkMode from '@hook/useDarkMode';
import { MutableRefObject } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon, { Icons } from '@element/Icon/Icon';
import Tooltip, { TooltipDirection } from '@element/Tooltip/Tooltip';
import styles from './SettingsMenu.module.scss';

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

export default SettingsMenu;
