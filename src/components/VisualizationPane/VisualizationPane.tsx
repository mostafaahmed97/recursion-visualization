import * as d3 from 'd3';

import { useContext, useEffect } from 'react';

import { VisualizationContext } from '../VisualizationProvider';
import mermaid from 'mermaid';
import styled from 'styled-components';

mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'monospace',
});

export default function VisualizationPane() {
  const VisualizationPanel = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: calc(60%);
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
    overflow: hidden;
  `;
  const vizCxt = useContext(VisualizationContext);

  useEffect(() => {
    mermaid.contentLoaded();

    (async () => {
      console.log('hi');

      const { svg } = await mermaid.render(
        'mermaid-div',
        vizCxt.generatedDiagram
      );

      d3.select('.mermaid-div').html(svg);

      const svgEl = d3.select('svg');

      svgEl
        .style('width', '100%')
        .style('height', '100%')
        .style('max-width', '')
        .html('<g>' + svgEl.html() + '</g>');

      const inner = svgEl.select('g');
      const zoom = d3.zoom().on('zoom', function (event) {
        inner.attr('transform', event.transform);
      });

      svgEl.call(zoom);
    })();
  });

  return (
    <VisualizationPanel>
      {/* <pre className="mermaid">{vizCxt.generatedDiagram}</pre> */}
      <div
        style={{
          height: '100%',
          width: '100%',
        }}
        className="mermaid-div"
      >
        a
      </div>
    </VisualizationPanel>
  );
}
