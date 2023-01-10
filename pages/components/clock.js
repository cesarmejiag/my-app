import { useState, useEffect } from "react";

export default function Clock() {
  const [current, setCurrent] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setCurrent(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>{current.toLocaleTimeString()}</div>;
}
