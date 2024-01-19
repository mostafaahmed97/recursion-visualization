import './App.css';
import '../app/globals.css';

import OptionsPane from './components/options-pane/OptionsPane';
import VisualizationPanel from './components/VisualizationPanel';
import { Visualizationprovider } from './components/VisualizationProvider';
import { generateDiagram } from './utils';
import styled from 'styled-components';
import { tracedFactorial } from './algorithms/fact';
import { useState } from 'react';

function App() {
  const Wrapper = styled.div`
    display: flex;
    grid-template-columns: 40vw 60vw;
    flex-direction: row;
    height: 100vh;
    gap: 1rem;
    padding: 1rem;
    background-color: rgb(236, 236, 236);
  `;

  const [factorialArg, _] = useState(3);
  const chart = generateDiagram(tracedFactorial(factorialArg));

  return (
    <Wrapper>
      <Visualizationprovider>
        <OptionsPane></OptionsPane>
        <VisualizationPanel chart={chart}></VisualizationPanel>
      </Visualizationprovider>
    </Wrapper>
  );
}

export default App;
