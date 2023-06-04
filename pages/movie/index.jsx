import Layout from "../../components/layout";
import CardHome from "../../components/card/card-home";
import { useEffect, useState } from "react";
import ENV from "../../environment/const";

export default function Movie() {
  const [result, setResullt] = useState([]);
  useEffect(() => {
    fetchfunc();
  }, []);

  const fetchfunc = async () => {
    const response = await fetch(ENV.Movie, {
      method: "GET",
    });
    let data = await response.json();
    setResullt(data);
  };
  return (
    <>
      <Layout title="Movie" name="dbanime" />
      <CardHome data={result.data} />
    </>
  );
}
