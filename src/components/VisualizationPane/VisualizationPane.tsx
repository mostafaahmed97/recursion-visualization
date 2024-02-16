import {
  Excalidraw,
  convertToExcalidrawElements,
} from '@excalidraw/excalidraw';

import { RootState } from '@/store';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

  const diagramElements = useSelector(
    (state: RootState) => state.visualizationPane.diagram
  );

  const width = 250;
  const height = 100;
  const colOffest = 175;

  const elements = convertToExcalidrawElements([
    {
      id: 'rect1',
      type: 'rectangle',
      x: 0,
      y: 0,
      width,
      height,
      label: { text: 'Hi', textAlign: 'center', fontSize: 24 },
    },
    {
      id: 'rect2',
      type: 'rectangle',
      x: width + colOffest,
      y: 0,
      width,
      height,
    },
    {
      id: 'line1',
      type: 'arrow',
      x: width,
      y: height / 2,
      width: colOffest,
      height: 1,
      endArrowhead: 'triangle',
      start: { id: 'rect1' },
      end: { id: 'rect2' },
    },
  ]);

  return (
    <VisualizationPanel>
      <Excalidraw
        initialData={{
          elements: convertToExcalidrawElements(diagramElements),
          appState: { zenModeEnabled: true, objectsSnapModeEnabled: true },
          scrollToContent: true,
        }}
      ></Excalidraw>
    </VisualizationPanel>
  );
}
