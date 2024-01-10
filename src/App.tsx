import './App.css';

import styled from 'styled-components';

function App() {
  const MyStyledDiv = styled.div`
    display: flex;
    background: red;
    font: 300;
    font-style: italic;
  `;

  return (
    <>
      <div>Hi</div>
      <div>Hi again</div>
      <div>Im a new project</div>
      <MyStyledDiv>Im a styled div</MyStyledDiv>
    </>
  );
}

export default App;
