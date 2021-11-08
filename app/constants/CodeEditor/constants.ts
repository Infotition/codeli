/* eslint-disable sonarjs/no-duplicate-string */

export const example = {
  language: 'javascript',
  code: `def n = 20
for i in range(1, n) {
  if ( (i mod 15) is 0 ) {
    print("FizzBuzz")
  }
  else if ( (i mod 3) is 0 ) {
    print("Fizz")
  }
  else if ( (i mod 5) is 0 ) {
    print("Buzz")
  }
  else {
    print(i)
  }
}`,
};

export const palenight = {
  name: 'palenight',
  editorTheme: {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'comment', foreground: '#697098', fontStyle: 'italic' },
      { token: 'number', foreground: '#F78C6C' },
      { token: 'keyword', foreground: '#c792ea' },
      { token: 'string', foreground: '#C3E88D' },
      { token: 'delimiter', foreground: '#c792ea' },
      { token: 'delimiter.bracket', foreground: '#89DDFF' },
      { token: 'delimiter.parenthesis', foreground: '#89DDFF' },
      { token: 'delimiter.square', foreground: '#89DDFF' },
      { token: 'type.identifier', foreground: '#F78C6C' },
      { token: 'control-structure', foreground: '#89DDFF' },
      { token: 'class', foreground: '#ff0000' },
      { token: 'dot', foreground: '#89DDFF' },
      { token: 'storage.type', foreground: '#c792ea' },
      { token: 'operator', foreground: '#c792ea' },
      { token: 'function.name', foreground: '#82AAFF' },
    ],
    colors: {
      'editorLineNumber.foreground': '#3A3F58',
      'editorLineNumber.activeForeground': '#676E95',
      'editor.background': '#262A3B',
      'editor.foreground': '#A6ACCD',
      'editor.lineHighlightBackground': '#00000050',
      'editor.selectionBackground': '#717CB450',
      'editor.selectionHighlightBackground': '#FFCC0020',
      'scrollbarSlider.background': '#A6ACCD20',
      'scrollbarSlider.hoverBackground': '#A6ACCD10',
      'scrollbarSlider.activeBackground': '#80CBC4',
      'scrollbar.shadow': '#292D3E00',
      'widget.shadow': '#00000030',
    },
  },
};

export const tokenizer = {
  operators: ['-', '+', '*', '/', '~', '>', '<', '='],
  symbols: /[=><!~?:&|+\-*/^%]+/,
  tokenizer: {
    root: [
      [/\/\/.*?$/, 'comment'],
      [/[0-9]+\.[0-9]+/, 'number'],
      [/[0-9][0-9]*/, 'number'],
      [/"(?:\\["\\]|[^\n"\\])*"/, 'string'],
      [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],
      [/mod |is /, 'operator'],
      [/=/, 'assign'],
      [/for|in |while|if|else/, 'control-structure'],
      [/\./, 'dot'],
      [/def/, 'storage.type'],
      [/set/, 'storage.type'],
      [/[a-z]+(?=\()/, 'function.name'],
      [/[a-zA-Z][a-zA-Z_0-9]*/, 'identifier'],
    ],
  },
};
