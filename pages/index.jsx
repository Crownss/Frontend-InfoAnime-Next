import CardHome from "../components/card/card-home";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import ENV from "../environment/const";

export default function Home() {
  const [result, setResult] = useState([]);
  const [currentPage, setCurrent] = useState(1);
  const [hasNext, setNext] = useState(false);
  const pageSize = 9;
  useEffect(() => {
    fetchfunc(pageSize, 1);
  }, []);

  const fetchfunc = async (size, page) => {
    const response = await fetch(ENV.Home + `?limit=${size}&page=${page}`, {
      method: "GET",
    });
    const data = await response.json();
    setCurrent(data.pagination.current_page);
    setNext(data.pagination.has_next_page);
    setResult(data);
  };
  const nextFunc = () => {
    fetchfunc(pageSize, currentPage + 1);
  };
  const prevFunc = () => {
    fetchfunc(pageSize, currentPage - 1);
  };
  return (
    <>
      <Layout title="Home" name="InfoAnime" />
      <div className="join grid grid-cols-2 xl:float-right">
        <button
          className="join-item btn btn-ghost"
          disabled={currentPage === 1 ? "disable" : ""}
          onClick={prevFunc}
        >
          Previous
        </button>
        <button
          className="join-item btn btn-ghost"
          disabled={hasNext ? "" : "disable"}
          onClick={nextFunc}
        >
          Next
        </button>
      </div>
      <CardHome data={result.data} />
    </>
  );
}
