import Image from "next/image";
import { useState } from "react";

export default function CardHome(props) {
  const [isOpen, setOpen] = useState(false);
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
                  <button
                    className="card-title font-bold text-center tooltip"
                    data-tip="more information..."
                    onClick={() => {
                      if (!isOpen) {
                        return setOpen(true);
                      }
                      return setOpen(false);
                    }}
                  >
                    {result.title}
                  </button>
                  <p className="text-ellipsis overflow-hidden text-left indent-5">
                    {result.synopsis}
                  </p>
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
      {isOpen ? (
        <dialog className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </form>
          {/* <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form> */}
        </dialog>
      ) : (
        () => {
          return setOpen(false);
        }
      )}
      <br />
      <br />
    </>
  );
}
