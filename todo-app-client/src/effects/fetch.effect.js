import { useEffect, useState } from 'react'
import { GRAPHQL_API, FETCH_BODY } from '../core/constants';

const useFetch = (query, prop) => {
  const [data, setData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(GRAPHQL_API, {
            ...FETCH_BODY,
            body: JSON.stringify({
                query
            }),
        });
        const result = await res.json();
        setData(result.data[prop]);
      };
     fetchData();
  }, [prop, query]);

  return data;
}

export default useFetch;
