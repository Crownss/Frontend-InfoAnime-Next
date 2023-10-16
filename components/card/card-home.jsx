import Image from "next/image";

export default function CardHome(props) {
  function back_page() {
    window.history.back();
  }
  function refresh_page() {
    window.location.href = "/";
  }
  return (
    <>
      <div
        className={
          props.data ? "container flex flex-wrap justify-around" : "hidden"
        }
      >
        {props.data ? (
          props.data.map((result) => (
            <div key={result.mal_id} className="md:space-x-10">
              <div className="mt-12"></div>
              <div className="card w-96 bg-base-100 rounded-2xl shadow-2xl image-full">
                <figure className="">
                  <Image
                    src={result.images.webp.large_image_url}
                    alt={result.title}
                    // fill={true}
                    width={1000}
                    height={1000}
                    className=""
                  />
                </figure>
                <div className="card-body">
                  <btn
                    className="card-title font-bold text-center tooltip text-lg select-none"
                    // data-tip="more information..."
                  >
                    {result.title}
                  </btn>
                  <p className="text-center text-base font-semibold select-none">
                    {result.aired.string}
                  </p>
                  <p className="text-ellipsis overflow-hidden text-left indent-5">
                    {result.synopsis}
                  </p>
                  <div className="flex flex-col select-none">
                    <div className="font-bold">
                      Genre&apos;s:{" "}
                      {result.genres
                        ? result.genres.map((genre) => (
                            <div
                              key={genre.mal_id}
                              className="badge badge-secondary badge-outline text-xs"
                            >
                              {genre.name}
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="font-bold">
                      Studio&apos;s:{" "}
                      {result.studios
                        ? result.studios.map((studio) => (
                            <div
                              key={studio.mal_id}
                              className="badge badge-accent badge-outline text-xs"
                            >
                              {studio.name}
                            </div>
                          ))
                        : ""}
                    </div>
                    <div className="font-bold">
                      Source:{" "}
                      <div className="badge badge-primary badge-outline">
                        {result.source}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      </div>
    </>
  );
}
