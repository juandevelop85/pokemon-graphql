import { Select, SelectItem } from '@heroui/react';
import { useQuery } from '@apollo/client';
import { GET_GENERATIONS } from '../../src/graphql/queries/getGenerations';

export default function GenerationSelector({ value, onChange }) {
  const { data, loading, error } = useQuery(GET_GENERATIONS);

  if (loading) return <p>Cargando generaciones...</p>;
  if (error) return <p>Error al cargar generaciones: {error.message}</p>;

  return (
    <Select className='max-w-xs' label='Seleccionar generación' value={value} onChange={onChange}>
      {data.generations.map((gen) => (
        <SelectItem key={gen.name}>{gen?.name?.replace('generation-', 'Generación ').toUpperCase()}</SelectItem>
      ))}
    </Select>
  );
}
