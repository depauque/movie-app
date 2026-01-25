import { useEffect, useState } from "react";

function useFetch<T>(url: string): [T, boolean, Error | null] {
  const [fetchedData, setFetchedData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [url]);

  return [fetchedData, isLoading, error];
}

export default useFetch;
