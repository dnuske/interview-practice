import {useEffect, useState} from "react";

export function useInterval(f: () => void, interval?: number) {
  useEffect(() => {
    if (interval !== null) {
      const id = setInterval(f, interval)
      return () => {
        clearInterval(id)
      }
    }
  }, [f, interval])
}

export function useDebounce(f: () => void, delay: number, contract: any[] = []): [NodeJS.Timeout | number, () => void] {

  const [id, setId] = useState<NodeJS.Timeout | number>();

  useEffect(() => {
    const _id = setTimeout(f, delay)
    setId(_id);
    return () => {
      clearTimeout(_id)
    }
  }, contract)

  return [id, () => {
    f()
    clearTimeout(id)
  }];
}
