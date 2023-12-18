import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  //
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          setData(result);
          setError(null);
          setIsPending(false);
        } catch (error) {
          setError(`Error fetching data : ${error.message}`);
          setIsPending(false);
        }
      };
      fetchData();
    }, 2000);
  }, [url]);
  //
  return { data, error, isPending };
};

export default useFetch;
