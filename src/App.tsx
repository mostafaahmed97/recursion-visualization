import './App.css';
import '../app/globals.css';

import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
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

  const OptionsPane = styled.div`
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
  `;

  const VisualizationPane = styled.div`
    flex: 3;
    padding: 1rem;
    border-radius: 6px;
    background-color: #fafafa;
  `;

  return (
    <Wrapper>
      <OptionsPane>
        <h1 className="mb-2 font-bold">Recursion Visualizer</h1>
        <Input
          className="mb-2"
          placeholder="Number"
          aria-label="Number"
        ></Input>
        <Button style={{ marginRight: '2rem' }}>Hi</Button>
        <Button variant={'outline'}>Hiiii</Button>
      </OptionsPane>
      <VisualizationPane></VisualizationPane>
    </Wrapper>
  );
}

export default App;
