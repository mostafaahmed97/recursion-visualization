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
