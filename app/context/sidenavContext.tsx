import { createContext, useContext, useReducer } from 'react';

type Action = { type: 'toggle' };
type Dispatch = (action: Action) => void;
type State = { isActive: boolean };
type SidenavProviderProps = { children: React.ReactNode };

const SidenavStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function sidenavReducer(state: State, action: Action) {
  if (action.type === 'toggle') {
    window.localStorage.setItem('dark-mode', JSON.stringify(!state.isActive));
    return { isActive: !state.isActive };
  }

  throw new Error(`Unhandled action type: ${action.type}`);
}

const SidenavProvider = ({ children }: SidenavProviderProps) => {
  const [state, dispatch] = useReducer(sidenavReducer, { isActive: false });
  const value = { state, dispatch };

  return (
    <SidenavStateContext.Provider value={value}>
      {children}
    </SidenavStateContext.Provider>
  );
};

const useSidenav = () => {
  const context = useContext(SidenavStateContext);
  if (context === undefined) {
    throw new Error('useSidenav must be used within a SidenavProvider');
  }
  return context;
};

export { SidenavProvider, useSidenav };
