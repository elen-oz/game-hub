import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import presetDataSet from '../services/datasetGenres';
import { CanceledError } from 'axios';

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((response) => {
        // todo: save to LocalStorage
        console.log('response is successful');
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        // todo: убрать когда сделаю локал сторедж
        if (error.message === 'Network Error') {
          console.log('response is NOT successful');
          setGenres(presetDataSet.results);
          setLoading(false);
          return;
        }

        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
