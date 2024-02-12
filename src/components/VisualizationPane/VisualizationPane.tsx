import {
  Excalidraw,
  convertToExcalidrawElements,
} from '@excalidraw/excalidraw';

import styled from 'styled-components';

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

  const elements = convertToExcalidrawElements([
    {
      id: 'rect1',
      type: 'rectangle',
      x: 0,
      y: 0,
      width: 250,
      height: 100,
      label: { text: 'Hi', textAlign: 'center', fontSize: 24 },
    },
    {
      id: 'rect2',
      type: 'rectangle',
      x: 500,
      y: 0,
      width: 250,
      height: 100,
      label: { text: 'Hello', textAlign: 'center', fontSize: 24 },
    },
    {
      type: 'arrow',
      x: 250,
      y: 50,
      width: 250,
      start: { id: 'rect1' },
      end: { id: 'rect2' },
      label: { text: 'Greeting' },
      endArrowhead: 'triangle',
    },
    {
      id: 'rect3',
      type: 'rectangle',
      x: 0,
      y: 500,
      width: 250,
      height: 100,
      label: { text: 'Yo', textAlign: 'center', fontSize: 24 },
    },
    {
      type: 'line',
      x: 125,
      y: 100,
      height: 400,
      width: 1,
      start: { id: 'rect1' },
      end: { id: 'rect3' },
      label: { text: 'Greeting' },
    },
    {
      id: 'rect4',
      type: 'rectangle',
      x: 0,
      y: 250,
      width: 250,
      height: 100,
      backgroundColor: '#fff',
      roundness: { type: 1 },
      label: { text: 'Yo', textAlign: 'center', fontSize: 24 },
    },
  ]);

  return (
    <VisualizationPanel>
      <Excalidraw
        initialData={{
          elements,
          appState: { zenModeEnabled: true },
          scrollToContent: true,
        }}
      ></Excalidraw>
    </VisualizationPanel>
  );
}
