import React from 'react';
import { capitalize } from '../../helpers/common-functions';
import { GET_EVOLUTION_CHAIN } from '../../graphql/queries/getEvolutionChain';
import { useQuery } from '@apollo/client';

export default function EvolutionChain({ pokemonId }) {
  const { data: pokeEvolutionData } = useQuery(GET_EVOLUTION_CHAIN, {
    variables: { id: pokemonId },
  });

  const speciesList = pokeEvolutionData?.evolutionchain?.[0]?.pokemonspecies || [];

  const sortedSpecies = [...speciesList].sort((a, b) => a.order - b.order);

  const pokemonImage = (pokemon) => {
    return (
      pokemon?.pokemons?.[0]?.pokemonsprites?.[0]?.sprites ||
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    );
  };

  return (
    <>
      <h2>Evoluciones</h2>

      <div className='flex items-center justify-center flex-wrap gap-4 mt-20'>
        {sortedSpecies.map((pokemon, index) => (
          <React.Fragment key={pokemon.id}>
            <div
              className={`relative ${pokemonId === pokemon.id ? 'bg-primary-100' : 'bg-white'} rounded-lg shadow-md px-4 pt-16 pb-6 text-center w-40`}
            >
              <div className='absolute -top-10 left-1/2 transform -translate-x-1/2'>
                <img src={pokemonImage(pokemon)} alt={pokemon.name} className='w-20 h-20' />
              </div>
              <h3 className='text-md font-semibold mb-2'>{capitalize(pokemon.name)}</h3>
              <div className='flex items-center justify-center mt-2 gap-2'>
                {pokemon.is_legendary && <span className='text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full'>Legendario</span>}
                {pokemon.is_mythical && <span className='text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full'>Mítico</span>}
                {pokemon.is_baby && <span className='text-xs bg-pink-200 text-pink-800 px-2 py-0.5 rounded-full'>Bebé</span>}
                {!pokemon.is_baby && <span className='text-xs bg-pink-200 text-pink-800 px-2 py-0.5 rounded-full'>Adulto</span>}
              </div>
            </div>

            {index < sortedSpecies.length - 1 && <div className='text-3xl text-gray-500'>→</div>}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
