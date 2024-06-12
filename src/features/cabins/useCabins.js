import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

export const useCabins = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['cabins_40'],
    queryFn: getCabins,
  });
  return { data, isLoading, error };
};
