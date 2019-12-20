import { useState, useEffect } from 'react';

export default function useFetch(url, option){
  const [ loanding, setLoanding ] = useState(true);
  const [ result, setResult ] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    (async () =>{
      try{
        const res = await fetch(url, option);
        const json = await res.json();
        setResult(json);
        setLoanding(false);
      }catch(err){
        setLoanding(false);
        setError(err);
      }
    })()
  },[option, url])

  return { loanding, result, error };
}