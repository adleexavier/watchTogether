import React, { useEffect, useRef } from "react";
import NavBar from "../NavBar";
import cls from "./Home.module.css";
import { useSearchParams } from "react-router-dom";

/**
 * Importatnt technique by maintaining the state in the url so even if you reload or
 * url state will always maintain.
 */

export default function Home() {
  //In type script the values of obj in useSearchParams should be string - rule
  // searchParams - type is  URLSearchParams

  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    isNew: "",
  });

  return (
    <div>
      <NavBar></NavBar>
      <h1 className={cls.sectionHeading}> #Trending </h1>
      <input
        type="text"
        onChange={(e) =>
          setSearchParams(
            (prev) => {
              prev.set("search", e.currentTarget.value);
              return prev;
            },
            { replace: true }
          )
        }
      />
    </div>
  );
}
