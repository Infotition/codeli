import { useEffect } from 'react';
import { useTheme } from '@context/themeContext';

const useDarkMode = () => {
  const { dispatch, state } = useTheme();

  const enabled = state.dark;

  const setEnabled = () => dispatch({ type: 'toggle' });

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    if (enabled) bodyClass.add(className);
    else bodyClass.remove(className);
  });

  return [enabled, setEnabled] as const;
};

export default useDarkMode;
