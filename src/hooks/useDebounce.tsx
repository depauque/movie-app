import { useRef } from "react";

function useDebounce<T>(callback: (value: T) => void, delay: number) {
  const timer = useRef(0);

  return (value: T) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      callback(value);
    }, delay);
  };
}

export default useDebounce;
