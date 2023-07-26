import { useCallback, useState } from "react";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

export default function LoveModeIndex() {
  const rdr = useRouter();
  let timeout;
  const debounce = (ms) => {
    clearTimeout(timeout);
    let promise = new Promise(function (resolve) {
      timeout = setTimeout(function () {
        resolve(null);
      }, ms);
    });
    return promise;
  };
  const onChange = useCallback(async (event) => {
    await debounce(1500);
    rdr.push("/lovemode/" + event.target.value);
  });
  //   console.log(inputan);
  return (
    <>
      <Layout title="mode bucin" name="love mode" />
      <div className="flex flex-wrap justify-center items-center">
        <input
          type="text"
          placeholder="input name"
          className="input input-ghost w-full max-w-xs"
          onChange={onChange}
        />
      </div>
    </>
  );
}
