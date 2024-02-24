import './App.css';
import '../app/globals.css';

import { Analytics } from '@vercel/analytics/react';
import OptionsPane from './components/OptionsPane/OptionsPane';
import VisualizationPane from './components/VisualizationPane/VisualizationPane';
import styled from 'styled-components';

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

  return (
    <Wrapper>
      <OptionsPane></OptionsPane>
      <VisualizationPane></VisualizationPane>

      <Analytics></Analytics>
    </Wrapper>
  );
}

export default App;
