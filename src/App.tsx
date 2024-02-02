import { useState } from 'react';
import { TextEditor } from './components/text-editor';

function App() {
  const [value, setValue] = useState<string>('xxx');

  return (
    <>
      <h1>YATE</h1>
      <TextEditor value={value} onChange={(value: string) => setValue(value)} />
    </>
  );
}

export default App;
