import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando post
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 - loading
  const [loading, setLoading] = useState(false);

  // --- Funções ---
  const httpConfig = (data, method) => {
    if(method === "POST"){
        setConfig({
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        setMethod(method);
    }
  };

  useEffect(() => {
    // 6 - loading
    setLoading(true);
    
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch();
      }
    }
    httpRequest();
  }, [config, method, url]);
  return { data, httpConfig, loading };
};
