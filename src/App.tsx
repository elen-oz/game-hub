import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem as='header' area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem as='aside' area='aside'>
          Aside
        </GridItem>
      </Show>
      <GridItem as='main' area='main'>
        <GameGrid />
      </GridItem>
      <GridItem as='footer' area='footer'>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
