import { useEffect, useRef } from 'react';

import mermaid from 'mermaid';
import styled from 'styled-components';

type ComponentProps = {
  chart: string;
};

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'monospace',
});

export default function VisualizationPanel(props: ComponentProps) {
  const VisualizationPanel = styled.div`
    flex: 3;
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
    overflow: scroll;
  `;

  const mermaidOutputDiv = useRef(null);

  // useEffect(() => {
  //   mermaid.initialize({
  //     startOnLoad: true,
  //     theme: 'default',
  //     securityLevel: 'loose',
  //   });
  // }, []);

  useEffect(() => {
    (async () => {
      const { svg, bindFunctions } = await mermaid.render(
        'mermaidDiv2',
        props.chart
      );

      // if (mermaidOutputDiv.current) mermaidOutputDiv.current.innerHtml = 'Hi';
      // if (document.getElementById('mermaidDiv'))
      //   document.getElementById('mermaidDiv').innerHTML = svg;
      mermaid.contentLoaded();
    })();
  }, [props.chart]);

  useEffect(() => {}, [props.chart]);

  return (
    <VisualizationPanel>
      <pre className="mermaid">{props.chart}</pre>

      {/* <div id="mermaidDiv" ref={mermaidOutputDiv}>
        {props.chart}
      </div> */}
    </VisualizationPanel>
  );
}
