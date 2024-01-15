import './App.css';
import '../app/globals.css';

import { diagramFactorial, factorial, trace } from './viz/fact';

import OptionsPanel from './components/OptionsPanel';
import VisualizationPanel from './components/VisualizationPanel';
import { generateDiagram } from './viz/common';
import styled from 'styled-components';

function App() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    gap: 1rem;
    padding: 1rem;
    background-color: rgb(236, 236, 236);
  `;

  const chart = generateDiagram(diagramFactorial(3));
  console.log(chart);

  return (
    <Wrapper>
      <OptionsPanel></OptionsPanel>
      <VisualizationPanel chart={chart}></VisualizationPanel>
    </Wrapper>
  );
}

export default App;
