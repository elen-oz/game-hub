import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem as='header' area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem as='aside' area='aside' paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem as='main' area='main'>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem as='footer' area='footer'>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
