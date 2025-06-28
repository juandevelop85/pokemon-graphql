import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS_BY_GENERATION } from '../../src/graphql/queries/getPokemonsByGeneration';
import { Select, SelectItem, Spinner, User } from '@heroui/react';
import GenerationSelector from '../GenerationSelector';
import PokemonCard from '../PokemonCard';
import Paginator from '../Paginator';
import FilterInput from '../FilterInput';

export default function PokemonListWithGeneration() {
  const [generation, setGeneration] = useState('generation-i');
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(10);
  const [searchName, setSearchName] = useState('');

  const offset = page * pageCount;

  const {
    data: pokeData,
    loading: pokeLoading,
    error: pokeError,
  } = useQuery(GET_POKEMONS_BY_GENERATION, {
    variables: { generationName: generation, limit: pageCount, offset, nameFilter: `%${searchName}%` },
    skip: !generation,
  });

  const handleGenChange = (e) => {
    setGeneration(e.target.value);
    setPage(0);
  };

  const handleChangeName = (value) => {
    setSearchName(value);
    setPage(0);
  };

  return (
    <div className='container mx-auto mt-8'>
      <h2>Pokémon por generación</h2>

      <div className='flex gap-4 mt-4'>
        <GenerationSelector value={generation} onChange={handleGenChange} />
        <Select
          className='max-w-xs'
          label='Seleccionar cantidad'
          selectedKeys={[`${pageCount}`]}
          onChange={(e) => setPageCount(parseInt(e.target.value))}
        >
          {[10, 20, 50, 100].map((count) => (
            <SelectItem key={count}>{`${count}`}</SelectItem>
          ))}
        </Select>
        <FilterInput setSearchName={handleChangeName} />
      </div>

      {pokeLoading ? (
        <div className='flex justify-center mt-8 w-full items-center'>
          <Spinner classNames={{ label: 'text-foreground mt-4' }} size='lg' label='Consultando...' variant='wave' />
        </div>
      ) : pokeError ? (
        <p>Error: {pokeError.message}</p>
      ) : (
        <>
          {pokeData?.pokemonspecies?.length === 0 && (
            <p className='text-center text-foreground mt-10'>No se encontraron Pokémones con los criterios de búsqueda.</p>
          )}
          <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full'>
            {pokeData?.pokemonspecies?.map((pokemon) => (
              <li key={pokemon.id} className='mt-8'>
                <PokemonCard pokemon={pokemon} />
              </li>
            ))}
          </ul>
          <Paginator page={page} setPage={setPage} generation={generation} pageCount={pageCount} searchName={searchName} />
        </>
      )}
    </div>
  );
}
