import Image from "next/image";
import { useRouter } from "next/router";

export default function CardHome(props) {
  const router = useRouter();
  return (
    <>
      {props.data
        ? props.data.map((result) => (
            <div key={result.mal_id}>
              <div className="mt-10"></div>
              <div className="container mx-auto flex flex-wrap justify-around">
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                  <figure className="blur-sm">
                    <Image
                      src={result.images.webp.large_image_url}
                      alt={result.title}
                      fill={true}
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
            </div>
          ))
        : ""}
      <br />
      <br />
    </>
  );
}
