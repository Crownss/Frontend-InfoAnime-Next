import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import React, { useCallback, useRef, useState } from "react";
import axios from "axios";
import ENV from "../environment/const";

export default function Navbar() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [result, setResult] = useState([]);
  const searchEndPoint = ENV.Search;
  let timeout;
  function debounce(ms) {
    clearTimeout(timeout);
    let promise = new Promise(function (resolve) {
      timeout = setTimeout(function () {
        resolve(null);
      }, ms);
    });
    return promise;
  }
  const onChange = useCallback(
    async (event) => {
      setQuery(event.target.value);
      if (event.target.value !== "") {
        await debounce(700);
        axios
          .get(searchEndPoint + event.target.value)
          .then((res) => setResult(res.data.data))
          .catch((err) => console.log(err.message));
      } else {
        setResult([]);
      }
    },
    [searchEndPoint]
  );
  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);
  const onFocus = useCallback(() => {
    setActive(true);
    window.removeEventListener("click", onClick);
  }, [onClick]);
  const getCurrentPath = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="navbar bg-gray-700 items-start">
        <div className="flex-1">
          <div className="mt-10"></div>
          <Link
            href={"/"}
            className="normal-case text-2xl font-bold text-indigo-100"
          >
            <Image alt="logo" src={"/alice.png"} width={50} height={10} />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search ...."
              className="input input-ghost w-full max-w-xs rounded-xl"
              onChange={onChange}
              onFocus={onFocus}
              value={query}
            />
            <div className="">
              {active && result && query
                ? query.length > 0 && (
                    <ul className="absolute z-50 border border-cyan-400 bg-base-100 rounded-xl">
                      {result.map(({ mal_id, title, url }) => (
                        <li key={mal_id}>
                          <Link href={url}>
                            <p className="font-semibold transition duration-500 ease-in-out hover:text-blue-500">
                              {title}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                : null}
            </div>
          </div>
          <div
            className="dropdown dropdown-end rounded-lg"
            onClick={() => {
              if (!isOpen) {
                return setOpen(true);
              }
              return setOpen(false);
            }}
          >
            <label
              tabIndex={0}
              className="btn btn-rounded btn-outline rounded-lg"
            >
              <div className="">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </label>
            {isOpen ? (
              <>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-lg w-52"
                >
                  <li>
                    <Link
                      href={"/"}
                      className={
                        getCurrentPath.pathname === "/"
                          ? "justify-between border-solid border-2 hover:rounded-xl border-sky-700"
                          : "justify-between hover:border-solid hover:border-2 hover:border-sky-500"
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/movie"}
                      className={
                        getCurrentPath.pathname === "/movie"
                          ? "justify-between border-solid border-2 border-sky-700"
                          : "justify-between hover:border-solid hover:border-2 hover:border-sky-500"
                      }
                    >
                      Movie
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about"}
                      className={
                        getCurrentPath.pathname === "/about"
                          ? "justify-between border-solid border-2 border-sky-700"
                          : "justify-between hover:border-solid hover:border-2 hover:border-sky-500"
                      }
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              () => {
                return setOpen(false);
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
