import CardHome from "../components/card/card-home";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ENV from "../environment/const";

export default function Home() {
  const router = useRouter();
  const [result, setResullt] = useState([]);
  useEffect(() => {
    fetchfunc();
  }, []);

  const fetchfunc = async () => {
    const response = await fetch(ENV.Home, { method: "GET" });
    const data = await response.json();
    setResullt(data);
  };

  return (
    <div>
      <Layout title="Home" name="dbanime" />
      <CardHome data={result.data} />
    </div>
  );
}
