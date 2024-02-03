import * as d3 from 'd3';

import { RootState } from '@/store';
import mermaid from 'mermaid';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

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

  const diagram = useSelector(
    (state: RootState) => state.visualizationPane.diagram
  );

  useEffect(() => {
    mermaid.contentLoaded();

    (async () => {
      console.log('hi');

      const { svg } = await mermaid.render('mermaid-div', diagram);

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
      <div
        style={{
          height: '100%',
          width: '100%',
        }}
        className="mermaid-div"
      ></div>
    </VisualizationPanel>
  );
}
