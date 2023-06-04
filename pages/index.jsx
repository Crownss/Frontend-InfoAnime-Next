import axios from "axios";
import CardHome from "../components/card/card-home";
import Layout from '../components/layout';

export async function getStaticProps() {
  let data
  await axios.get(process.env.NEXT_PUBLIC_API_HOME)
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

export default function Home({ data }) {
  return (
    <div>
      <Layout title="Home" name="dbanime" />
      <CardHome data={data.data} />
    </div>
  );
}
