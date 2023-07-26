import { useRouter } from "next/router";
import Image from "next/image";

export default function CardMovie(props) {
  const router = useRouter();
  function back_page() {
    window.history.back();
  }
  function refresh_page() {
    window.location.href = "/";
  }
  return (
    <>
      {props.data ? (
        props.data.map((result) => (
          <div key={result.mal_id}>
            <div className="mt-10"></div>
            <div className="container mx-auto flex flex-wrap justify-around">
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure className="">
                  <Image
                    src={result.images.webp.large_image_url}
                    alt={result.title}
                    fill={true}
                    className="rounded-2xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-center">
                    {result.title}
                  </h2>
                  <p className="text-ellipsis overflow-hidden text-left indent-5">
                    {result.synopsis}
                  </p>
                  {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div> */}
                </div>
              </div>
            </div>
            <div className="mt-10"></div>
          </div>
        ))
      ) : (
        <>
          <h1 className="font-bold text-center">
            I don&apos;t know what is wrong but, you can go{" "}
            <button onClick={back_page} className="font-bold">
              {" "}
              back{" "}
            </button>{" "}
            or{" "}
            <button onClick={refresh_page} className="font-bold">
              {" "}
              refresh{" "}
            </button>{" "}
            this page
          </h1>
        </>
      )}
      <br />
      <br />
    </>
  );
}
