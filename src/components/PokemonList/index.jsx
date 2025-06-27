import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS_BY_GENERATION } from '../../src/graphql/queries/getPokemonsByGeneration.js';
import { Button, Select, SelectItem, Spinner, User } from '@heroui/react';
import GenerationSelector from '../GenerationSelector/index.jsx';
import { capitalize } from '../../helpers/common-functions.js';


export default function PokemonListWithGeneration() {
  const [generation, setGeneration] = useState('generation-i');
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(10);

  const offset = page * pageCount;

  const {
    data: pokeData,
    loading: pokeLoading,
    error: pokeError,
  } = useQuery(GET_POKEMONS_BY_GENERATION, {
    variables: { generationName: generation, limit: pageCount, offset },
    skip: !generation,
  });

  const handleGenChange = (e) => {
    setGeneration(e.target.value);
    setPage(0); // reinicia paginación al cambiar generación
  };

  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className='container mx-auto mt-8'>
      <h2>Pokémon por generación</h2>

      <div className='flex gap-4 mt-4'>
        <GenerationSelector value={generation} onChange={handleGenChange} />
        <Select className='max-w-xs' label='Seleccionar cantidad' value={generation} onChange={(e) => setPageCount(parseInt(e.target.value))}>
          {[10, 20, 50, 100].map((count) => (
            <SelectItem key={count}>{`${count}`}</SelectItem>
          ))}
        </Select>
      </div>

      {pokeLoading ? (
        <div className='flex justify-center mt-8 w-full items-center'>
          <Spinner classNames={{ label: 'text-foreground mt-4' }} label='Consultando...' variant='wave' />
        </div>
      ) : pokeError ? (
        <p>Error: {pokeError.message}</p>
      ) : (
        <>
          <div className='flex flex-wrap gap-4 mt-4'>
            {pokeData?.pokemonspecies?.map((pokemon) => (
              <div
                key={pokemon.id}
                className='border-2 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 w-[200px] cursor-pointer'
              >
                <User
                  avatarProps={{
                    src: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                    size: 'lg',
                    alt: pokemon.name,
                  }}
                  description={pokemon.id}
                  name={capitalize(pokemon.name)}
                />
              </div>
            ))}
          </div>
          <div className='mt-10 flex justify-center gap-2'>
            <Button onPress={handlePrev} disabled={page === 0}>
              Anterior
            </Button>
            <Button onPress={handleNext}>Siguiente</Button>
          </div>
        </>
      )}
    </div>
  );
}
