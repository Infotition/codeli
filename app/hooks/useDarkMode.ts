import { useEffect } from 'react';
import { useTheme } from '@context/themeContext';

const useDarkMode = () => {
  const { dispatch, state } = useTheme();

  const enabled = state.dark;
  const setEnabled = () => dispatch({ type: 'toggle' });

  useEffect(() => {
    const bodyClass = window.document.body.classList;
    if (enabled) bodyClass.add('dark');
    else bodyClass.remove('dark');
  }, [enabled]);

  return [enabled, setEnabled] as const;
};

export default useDarkMode;
