import { useParams } from 'react-router';
import PokemonDetailData from '../../components/PokemonDetailData';

export default function PokemonDetail() {
  const { pokemon_id } = useParams();

  return <div>{pokemon_id && <PokemonDetailData pokemonId={pokemon_id} />}</div>;
}
