import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS_BY_GENERATION } from '../../graphql/queries/getPokemonsByGeneration';
import { Select, SelectItem, Spinner } from '@heroui/react';
import GenerationSelector from '../../components/GenerationSelector';
import PokemonCard from '../../components/PokemonCard';
import Paginator from '../../components/Paginator';
import FilterInput from '../../components/FilterInput';

export default function PokeDex() {
  const [generation, setGeneration] = useState(localStorage.getItem('generationId') || 'generation-i');
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
    localStorage.setItem('generationId', e.target.value);
    setGeneration(e.target.value);
    setPage(0);
  };

  const handleChangeName = (value) => {
    setSearchName(value);
    setPage(0);
  };

  return (
    <div className='container mx-auto mt-8'>
      <h2>Pokédex</h2>

      <div className='flex flex-col md:flex-row gap-4 mt-4 items-stretch'>
        <GenerationSelector value={generation} onChange={handleGenChange} />
        <Select label='Seleccionar cantidad' selectedKeys={[`${pageCount}`]} onChange={(e) => setPageCount(parseInt(e.target.value))}>
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
