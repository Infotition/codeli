import CodeliLayout from '@layout/Codeli/CodeliLayout';
import CodeliPage from '@template/Codeli/Codeli';
import { EditorProvider } from '@context/editorContext';

const App = () => (
  <CodeliLayout>
    <EditorProvider>
      <CodeliPage />
    </EditorProvider>
  </CodeliLayout>
);

export default App;
