import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { displayCode } from '../../optionsPaneSlice';
import { useSelector } from 'react-redux';

export function CodeDisplay() {
  const code = useSelector(displayCode);

  return (
    <div>
      <h3 className="text-base font-bold my-2">Code</h3>
      <div className="">
        <SyntaxHighlighter
          showInlineLineNumbers={true}
          wrapLines={true}
          language="typescript"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
