import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export default function useGet<T>(path: string) {
  const [items, setItems] = useState<T>();
  useEffect(() => {
    console.log("called");

    const getValue = async () => {
      const res = await fetch(BASE_URL + path);
      setItems(await res.json());
    };

    getValue();
  }, [path]);

  return items;
}
