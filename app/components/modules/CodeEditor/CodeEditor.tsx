/* eslint-disable no-template-curly-in-string */
import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { example, palenight, tokenizer } from '@constant/CodeEditor/constants';

import { useEditor } from '@context/editorContext';

const CodeEditor = () => {
  const monacoRef = useRef(null);
  const editorRef = useRef();

  const { dispatch, state } = useEditor();

  const onEditorDidMount = (editor: any, monaco: any) => {
    monacoRef.current = monaco;
    editorRef.current = editor;
    monaco.languages.register({ id: 'infolang' });
    monaco.languages.setMonarchTokensProvider('infolang', tokenizer);

    const insertSnippet =
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
    const kindSnippet = monaco.languages.CompletionItemKind.Keyword;

    monaco.languages.registerCompletionItemProvider('infolang', {
      provideCompletionItems: () => {
        const suggestions = [
          {
            label: 'print',
            kind: kindSnippet,
            insertText: 'print(${1:expr})',
            insertTextRules: insertSnippet,
            documentation: 'Print text on output',
          },
          {
            label: 'forloop',
            kind: kindSnippet,
            insertText: 'for ${1:var} in range(${2:from}, ${3:to}) {\n\t$4\n}',
            insertTextRules: insertSnippet,
            documentation: 'For loop',
          },
          {
            label: 'def',
            kind: kindSnippet,
            insertText: 'def ${1:name} = ${2:value}',
            insertTextRules: insertSnippet,
            documentation: 'Define and initialize a variable',
          },
          {
            label: 'if',
            kind: kindSnippet,
            insertText: ['if ( ${1:condition} ) {', '\t$2', '}'].join('\n'),
            insertTextRules: insertSnippet,
            documentation: 'If Statement',
          },
          {
            label: 'ifelse',
            kind: kindSnippet,
            insertText: 'if ( ${1:condition} ) {\n\t$2\n} else {\n\t$3\n}',
            insertTextRules: insertSnippet,
            documentation: 'If-Else Statement',
          },
        ];
        return { suggestions };
      },
    });

    monaco.editor.defineTheme(palenight.name, palenight.editorTheme);
    monaco.editor.setTheme(palenight.name);

    dispatch({ type: 'save', value: example.code });
  };

  const onEditorChange = (value: string) => {
    dispatch({ type: 'save', value });
  };

  return (
    <Editor
      height={'100%'}
      width={'100%'}
      value={state.value}
      language="infolang"
      onMount={onEditorDidMount}
      onChange={onEditorChange}
      loading={<div>Loading</div>}
      options={{
        fontLigatures: true,
        fontFamily: 'Fira Code',
        fontWeight: '450',
        minimap: { enabled: false },
        wordWrap: 'off',
      }}
    />
  );
};

export default CodeEditor;
