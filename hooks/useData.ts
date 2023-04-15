import {useState, useEffect} from 'react';

interface Props {
  url: string;
}

export function useData<T>({url}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<T[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);

        if (response.status !== 200) {
          setIsError(true);
          return;
        }

        const data = await response.json();

        setData(data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return {
    isLoading,
    data,
    isError,
  };
}
