import { useQuery } from '@apollo/client';
import { Pagination } from '@heroui/react';
import { GET_GENERATION_AGGREGATE } from '../../src/graphql/queries/getGenerationAggregate';

export default function Paginator({ page, setPage, generation, pageCount, searchName }) {
  const initialPage = page + 1;

  const { data } = useQuery(GET_GENERATION_AGGREGATE, {
    variables: { generationName: generation, nameFilter: `%${searchName}%` },
    skip: !generation,
  });

  const specieCount = data?.pokemonspecies_aggregate?.aggregate?.count || 0;
  const totalPages = Math.ceil(specieCount / pageCount);

  return (
    <div className='flex flex-col items-center justify-center mt-8 w-full'>
      <Pagination showControls initialPage={initialPage} total={totalPages} onChange={(numer) => setPage(numer - 1)} />
    </div>
  );
}
