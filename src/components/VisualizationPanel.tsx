import mermaid from 'mermaid';
import styled from 'styled-components';
import { useEffect } from 'react';

type ComponentProps = {
  chart: string;
};

export default function VisualizationPanel(props: ComponentProps) {
  const VisualizationPanel = styled.div`
    flex: 3;
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
  `;

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      sequence: {},
    });
  }, [props.chart]);

  useEffect(() => {}, [props.chart]);

  return (
    <VisualizationPanel>
      <div className="mermaid">{props.chart}</div>
    </VisualizationPanel>
  );
}
