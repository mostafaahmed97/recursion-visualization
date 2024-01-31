import './App.css';
import '../app/globals.css';

import OptionsPane from './components/options-pane/OptionsPane';
import VisualizationPanel from './components/VisualizationPanel';
import { Visualizationprovider } from './components/VisualizationProvider';
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
      <VisualizationPanel></VisualizationPanel>
    </Wrapper>
  );
}

export default App;
