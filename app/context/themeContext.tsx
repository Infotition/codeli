import { createContext, useContext, useReducer, useEffect } from 'react';

type Action = { type: 'toggle' | 'load' };
type Dispatch = (action: Action) => void;
type State = { dark: boolean };
type ThemeProviderProps = { children: React.ReactNode };

const ThemeStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function themeReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggle': {
      window.localStorage.setItem('dark-mode', JSON.stringify(!state.dark));
      return { dark: !state.dark };
    }
    case 'load': {
      const isDark = window.localStorage.getItem('dark-mode') === 'true';
      return { dark: isDark };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, { dark: true });

  useEffect(() => {
    dispatch({ type: 'load' });
  }, []);

  const value = { state, dispatch };

  return (
    <ThemeStateContext.Provider value={value}>
      {children}
    </ThemeStateContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeStateContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
