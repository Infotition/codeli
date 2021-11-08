import useWindowSize from '@hook/useWindowSize';
import CodeEditor from '@module/CodeEditor/CodeEditor';
import { useEditor } from '@context/editorContext';
import run from 'infolang';

const Codeli = () => {
  const { width } = useWindowSize();
  const { state } = useEditor();

  const dimension = (width || 0) - 20;

  return (
    <div className="w-full h-full">
      <div
        className="overflow-hidden shadow-lg bg3 rounded-3xl"
        style={{ width: dimension, height: dimension, margin: 10 }}
      >
        <div className="flex justify-end h-14">
          <button
            className="w-40 font-bold text-white bg-primary"
            onClick={() => console.log(run(state.value))}
          >
            Start
          </button>
        </div>
        <CodeEditor />
      </div>
    </div>
  );
};

export default Codeli;
