import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Image from "next/image";
import { useState } from "react";

export default function LoveMode() {
  const getName = useRouter().query.slug;
  const [onClick, setClick] = useState(false);
  const [changeSubject, setChangeSubject] = useState(false);
  return (
    <>
      <Layout title={"for " + getName + " ❤️"} name="" />
      <div className="flex flex-wrap justify-center items-center">
        <div className="">
          {changeSubject ? (
            <>
              {" "}
              <p className="text-center font-medium text-xl tracking-widest capitalize">
                YYEESS!!!
              </p>
              <div className="mt-7"></div>
              <Image
                src="https://media.tenor.com/B3N-_ll0bVsAAAAC/cats-dance-kiyyasia.gif"
                alt="neko"
                className="rounded-xl"
                width={450}
                height={400}
              />
              <div className="mt-7"></div>
              <p className="font-semibold text-center text-xl tracking-wider capitalize flex-none"></p>
              <div className="mt-7"></div>
            </>
          ) : (
            <>
              {" "}
              <p className="text-center font-medium text-xl tracking-widest capitalize">
                {"Jalan yuukk " + getName + "?"}
              </p>
              <div className="mt-7"></div>
              <Image
                src="https://media.tenor.com/zGm5acSjHCIAAAAM/cat-begging.gif"
                alt="neko"
                className="rounded-xl"
                width={450}
                height={400}
              />
              <div className="mt-7"></div>
              <p className="font-semibold text-center text-xl tracking-wider capitalize flex-none">
                please, {getName}?🥺🥺🥺
              </p>
              <div className="mt-7"></div>
            </>
          )}
          <div className={changeSubject ? "hidden" : "flex justify-between"}>
            <div className={onClick ? "px-28" : ""}>
              <button
                className="btn btn-error"
                onClick={() => {
                  if (!onClick) {
                    return setClick(true);
                  } else {
                    return setClick(false);
                  }
                }}
              >
                ngga
              </button>
            </div>
            <button
              className="btn btn-primary hover:flex-1"
              onClick={() => {
                if (!changeSubject) {
                  return setChangeSubject(true);
                }
              }}
            >
              gaskan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
