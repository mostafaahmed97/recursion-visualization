import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';

export function CodeDisplay() {
  return (
    <div>
      <h3 className="text-base font-bold my-2">Code</h3>
      <div className="">
        <SyntaxHighlighter
          showInlineLineNumbers={true}
          wrapLines={true}
          language="typescript"
        >
          const x = 21;
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
