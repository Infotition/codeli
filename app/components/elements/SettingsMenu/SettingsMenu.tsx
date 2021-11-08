import useDarkMode from '@hook/useDarkMode';
import { MutableRefObject } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon, { Icons } from '@element/Icon/Icon';

type SettingsMenuProps = {
  isActive: boolean;
  toggleRev: MutableRefObject<any>;
};

const SettingsMenu = ({ isActive, toggleRev }: SettingsMenuProps) => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key={isActive ? 'settings-active' : 'settings-inactive'}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{
            duration: 0.2,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          ref={toggleRev}
          className="absolute z-20 justify-end p-5 ml-8 shadow-lg bg3 top-32 right-5 color-transition"
        >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsMenu;
