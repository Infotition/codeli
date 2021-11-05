import { useSidenav } from '@context/sidenavContext';
import { AnimatePresence, motion } from 'framer-motion';

type SidenavLayoutProps = {
  children: React.ReactNode;
};

const SidenavLayout = ({ children }: SidenavLayoutProps) => {
  const { state, dispatch } = useSidenav();

  return (
    <AnimatePresence>
      {state.isActive && (
        <>
          <motion.nav
            key={state.isActive ? 'nav-open' : 'nav-closed'}
            initial={{ width: 0 }}
            animate={{ width: 250 }}
            exit={{ width: 0, transition: { duration: 0.3 } }}
            className="absolute z-20 h-full shadow-xl bg1 w-96 xl:static color-transition"
          >
            <motion.div
              initial={{ x: -30 }}
              animate={{ x: 0 }}
              exit={{ x: -40, transition: { duration: 0.3 } }}
            >
              {children}
            </motion.div>
          </motion.nav>
          <motion.div
            key={state.isActive ? 'backdrop-on' : 'backdrop-off'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            onClick={() => dispatch({ type: 'toggle' })}
            className="absolute z-10 w-full h-full bg-black opacity-20 xl:hidden"
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Sidenav = () => {
  return <SidenavLayout>Test</SidenavLayout>;
};

export default Sidenav;
