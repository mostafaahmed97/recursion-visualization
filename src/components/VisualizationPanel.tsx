import { useContext, useEffect } from 'react';

import { VisualizationContext } from './VisualizationProvider';
import mermaid from 'mermaid';
import styled from 'styled-components';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'monospace',
});

export default function VisualizationPanel() {
  const VisualizationPanel = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(60%);
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
    overflow: scroll;
  `;
  const vizCxt = useContext(VisualizationContext);

  useEffect(() => {
    mermaid.contentLoaded();
  });

  return (
    <VisualizationPanel>
      <pre className="mermaid">{vizCxt.generatedDiagram}</pre>
    </VisualizationPanel>
  );
}
