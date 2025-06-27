import { HeroUIProvider } from '@heroui/react';
import PokemonList from './components/PokemonList';

export default function App() {
  return (
    <HeroUIProvider>
      <PokemonList />
    </HeroUIProvider>
  );
}
