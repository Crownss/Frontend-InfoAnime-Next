import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Layout title="About" name="dbanime"></Layout>
      <h1 className="font-bold text-center capitalize text-xl">
        This web has build with{" "}
        <Link
          href="https://nextjs.org"
          className="transition duration-500 ease-in-out hover:text-blue-500"
          rel="noreferrer"
          target="_blank"
        >
          Nextjs
        </Link>{" "}
        as frontend and use jikan API for unofficial opensource my anime list
        API
      </h1>
      <div className="mt-5"></div>
      <h1 className="font-bold text-center">
        wanna ask something ?{" "}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://instagr.am/abcdefuck_yeah"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </h1>
    </>
  );
}
