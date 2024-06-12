import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

export const useBookings = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['bookings_40'],
    queryFn: getBookings(1),
  });
  return { data, isLoading, error };
};
