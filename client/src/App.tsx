import React from 'react';
import styled from 'styled-components';
import { Footer } from './components/footer';
import { Search } from './components/search';
import { Title } from './components/title';

function App() {
  return (
    <Container>
      <img src={'assets/music-distro-silhouette.png'} alt={'background'} height="400" width="960" />
      <Title />
      <Search />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`

export default App;
