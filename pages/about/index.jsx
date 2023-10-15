import { faInstagram, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Layout title="About" name="InfoAnime"></Layout>
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
      <div className="mt-10"></div>
      <div className="container mx-auto flex flex-nowrap">
        <div className="grow">
          <Link
            className="btn btn-outline font-bold text-center"
            target="_blank"
            rel="noreferrer"
            href="https://instagr.am/abcdefuck_yeah"
          >
            wanna ask something ? <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
        <div>
          <Link
            className="btn btn-outline font-bold text-center"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/crownss/frontend-infoanime-next"
          >
            here is the source code: <FontAwesomeIcon icon={faGithubAlt} />
          </Link>
        </div>
      </div>
    </>
  );
}
