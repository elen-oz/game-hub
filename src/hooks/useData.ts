import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import presetGamesSet from '../services/datasetGames';
import presetGenresSet from '../services/datasetGenres';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          // todo: save to LocalStorage
          console.log('response is successful');
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;

          // todo: убрать когда сделаю локал сторедж
          if (error.message === 'Network Error') {
            console.log('response is NOT successful');

            if (endpoint === '/games') {
              setData(presetGamesSet.results as T[]);
            } else {
              setData(presetGenresSet.results as T[]);
            }

            setLoading(false);
            return;
          }

          setError(error.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
