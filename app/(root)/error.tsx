"use client";
import { useEffect, useState } from "react";
import Error from "next/error";

interface DataState {
  errorCode: number | null;
  stars: number | null;
}

export default function Page() {
  const [data, setData] = useState<DataState>({ errorCode: null, stars: null });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.github.com/repos/vercel/next.js");
      if (!res.ok) {
        setData({ errorCode: res.status, stars: null });
      } else {
        const json = await res.json();
        setData({ errorCode: null, stars: json.stargazers_count });
      }
    }
    fetchData();
  }, []);

  if (data.errorCode) {
    return <Error statusCode={data.errorCode} />;
  }

  return <div><div>something went wrong 😓</div>Next stars: {data.stars}</div>;
}
