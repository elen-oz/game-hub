import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import presetDataSet from '../services/dataset';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((response) => {
        // todo: save to LocalStorage
        console.log('response is successful');
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;

        // todo: убрать когда сделаю локал сторедж
        if (error.message === 'Network Error') {
          console.log('response is NOT successful');
          setGames(presetDataSet.results);
          return;
        }

        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
