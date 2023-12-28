import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area='nav' bg='coral'>
        Nav
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
      <GridItem area='footer' bg='salmon'>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
