import './App.css';
import '../app/globals.css';

import OptionsPanel from './components/OptionsPanel';
import VisualizationPanel from './components/VisualizationPanel';
import { Visualizationprovider } from './components/VisualizationProvider';
import { generateDiagram } from './utils';
import styled from 'styled-components';
import { tracedFactorial } from './algorithms/fact';
import { useState } from 'react';

function App() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    gap: 1rem;
    padding: 1rem;
    background-color: rgb(236, 236, 236);
  `;

  const [factorialArg, setFactorialArg] = useState(3);
  const chart = generateDiagram(tracedFactorial(factorialArg));
  console.log({ factorialArg });

  return (
    <Wrapper>
      <Visualizationprovider>
        <OptionsPanel
          val={factorialArg}
          onChange={setFactorialArg}
        ></OptionsPanel>
        <VisualizationPanel chart={chart}></VisualizationPanel>
      </Visualizationprovider>
    </Wrapper>
  );
}

export default App;
