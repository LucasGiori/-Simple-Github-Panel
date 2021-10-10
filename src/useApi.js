import { useEffect, useState } from 'react';

const initialState = {
    error: undefined,
    data: undefined,
    loading: undefined,
};

export default function useApi({ url }) {
  const [state, setState] = useState(initialState);

  

  useEffect(() => {
    async function request() {
    
      try {
        setState({
            ...initialState,
            loading: true,
        })
        const response = await fetch(url);
        const json = await response.json();
    
        setState({
            ...initialState,
            data:json
        })
      } catch (error) {
        setState({
            ...initialState,
            error
        })
      }
    }

    request();

  }, [url]);

  return state;
}