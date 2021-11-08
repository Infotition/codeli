import { createContext, useContext, useReducer } from 'react';

type Action = { type: 'save'; value: string };
type Dispatch = (action: Action) => void;
type State = { value: string };
type EditorProviderProps = { children: React.ReactNode };

const EditorStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function EditorReducer(_state: State, action: Action) {
  if (action.type === 'save') {
    return { value: action.value };
  }
  throw new Error(`Unhandled action type: ${action.type}`);
}

const EditorProvider = ({ children }: EditorProviderProps) => {
  const [state, dispatch] = useReducer(EditorReducer, { value: '' });
  const value = { state, dispatch };

  return (
    <EditorStateContext.Provider value={value}>
      {children}
    </EditorStateContext.Provider>
  );
};

const useEditor = () => {
  const context = useContext(EditorStateContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within a EditorProvider');
  }
  return context;
};

export { EditorProvider, useEditor };
