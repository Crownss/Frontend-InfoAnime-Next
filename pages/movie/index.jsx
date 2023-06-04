import Layout from "../../components/layout";
import CardHome from "../../components/card/card-home";
import axios from "axios";

export async function getStaticProps() {
  let data
  await axios.get(process.env.NEXT_PUBLIC_API_MOVIE)
  .then((result)=>{data = result.data})
  .catch((err)=>{data = err.message});
  if (!data) {
    return {
      redirect: {
        destination: "/500",
        statusCode: 500,
      },
    };
  }
  return {
    props: { data },
    revalidate: 10,
  };
}

export default function Movie({ data }) {
  return (
    <>
      <Layout title="Movie" name="dbanime" />
      <CardHome data={data.data} />
    </>
  );
}
