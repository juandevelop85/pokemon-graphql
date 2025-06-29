import { GET_POKEMON_INFO } from '../../graphql/queries/getPokemonInfo';
import { useQuery } from '@apollo/client';
import { typeColorMap } from '../../helpers/colorTypes';
import { capitalize } from '../../helpers/common-functions';
import EvolutionChain from '../EvolutionChain';
import { Image } from '@heroui/react';

export default function PokemonDetailData({ pokemonId }) {
  const { data } = useQuery(GET_POKEMON_INFO, {
    variables: { pokemonId },
    skip: !pokemonId,
    fetchPolicy: 'no-cache',
  });

  const pokemonInfo = data?.pokemon?.[0];
  const types = pokemonInfo?.pokemontypes || [];
  const imagen =
    data?.pokemon?.[0]?.pokemonsprites?.[0]?.sprites || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const MAX_STAT = 150;
  const getStatColor = (value) => {
    switch (true) {
      case value >= 200:
        return 'bg-red-700';
      case value >= 150:
        return 'bg-red-500';
      case value >= 120:
        return 'bg-orange-400';
      case value >= 90:
        return 'bg-yellow-400';
      case value >= 60:
        return 'bg-green-400';
      case value >= 30:
        return 'bg-green-600';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className='bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto'>
      {/* Imagen, Medidas y Tipo en una fila horizontal */}
      <div className='flex flex-col md:flex-row gap-6 items-center justify-center'>
        <div className='flex justify-center md:justify-start flex-shrink-0'>
          <Image isBlurred alt={pokemonInfo?.name} className='w-40 h-40' src={imagen} />
        </div>
        <div className='flex flex-col gap-4 justify-center text-center md:text-left'>
          <h4 className='text-sm font-semibold text-gray-700'>Medidas</h4>
          <div className='flex flex-wrap gap-2'>
            <p className='text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full'>Altura: {(pokemonInfo?.height * 0.1).toFixed(1)} m</p>
            <p className='text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full'>Peso: {(pokemonInfo?.weight * 0.1).toFixed(1)} kg</p>
          </div>

          <div>
            <h4 className='text-sm font-semibold text-gray-700 mb-2'>Tipo</h4>
            <div className='flex flex-wrap gap-2'>
              {types.map((t) => {
                const typeNameSlug = t.type.name;
                const typeName = t?.type?.typenames?.[0]?.name;
                const typeClass = typeColorMap[typeNameSlug] || 'bg-gray-300 text-black';
                return (
                  <span key={typeNameSlug} className={`px-3 py-1 text-xs rounded-full ${typeClass}`}>
                    {capitalize(typeName)}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Habilidades */}
      <div className='mt-4'>
        <h4 className='text-sm font-semibold text-gray-700 mb-2'>Habilidades</h4>
        <ul className='list-disc list-inside text-sm text-gray-600'>
          {pokemonInfo?.pokemonabilities.map((ability) => (
            <li key={ability?.ability?.abilitynames[0]?.name}>{capitalize(ability?.ability?.abilitynames[0]?.name)}</li>
          ))}
        </ul>
      </div>

      {/* Puntos base */}
      <div className='mt-4'>
        <h4 className='text-sm font-semibold text-gray-700 mb-2'>Puntos base</h4>
        <div className='text-sm text-gray-600 space-y-1'>
          {pokemonInfo?.pokemonstats.map((stat) => (
            <div key={stat?.stat?.statnames[0]?.name} className='mb-2'>
              <div className='flex justify-between text-sm text-gray-700'>
                <span>{capitalize(stat?.stat?.statnames[0]?.name)}</span>
                <span>{stat?.base_stat}</span>
              </div>
              <div className='w-full bg-gray-200 h-3 rounded'>
                <div className={`${getStatColor(stat.base_stat)} h-3 rounded`} style={{ width: `${(stat.base_stat / MAX_STAT) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cadena evolutiva */}
      <div className='mt-6'>
        <EvolutionChain pokemonId={pokemonId} />
      </div>
    </div>
  );
}
