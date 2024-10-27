import { useEffect } from "react";

export default function Fetcher({ url, setData, setError }) {
  useEffect(() => {
    setData(null);
    setError(null);
    async function go() {
      try {
        const
          response = await fetch(url),
          result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };
    go();
  }, [url, setData, setError]); /*вот здесь не совсем понял, почему он просит внести все пропсы, нас интересует только изменение url, а он мне предлагает использовать useCallback для функций и внести их в массив зависимостей*/
}