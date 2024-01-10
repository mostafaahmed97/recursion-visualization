import './App.css';

import styled from 'styled-components';

function App() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    gap: 1rem;
    padding: 1rem;
  `;

  const OptionsPane = styled.div`
    flex: 1;
    border-radius: 6px;
    background-color: green;
  `;

  const VisualizationPane = styled.div`
    flex: 3;
    border-radius: 6px;
    background-color: blue;
  `;

  return (
    <Wrapper>
      <OptionsPane></OptionsPane>
      <VisualizationPane></VisualizationPane>
    </Wrapper>
  );
}

export default App;
