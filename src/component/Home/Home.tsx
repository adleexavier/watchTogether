import React from "react";
import NavBar from "../NavBar";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import cls from "./Home.module.css";

const data = ["Data ", "Data2 "];

export default function Home() {
  const queryClient = useQueryClient();
  const getQuery = useQuery({
    queryKey: ["getD1"],
    queryFn: () => {
      return new Promise((resolve, reject) => {
        console.log("fetching");
        setTimeout(() => {
          resolve(true);
        });
      })
        .then((isReachedServer) => {
          if (isReachedServer) {
            return `${data} is your data : - react query`;
          } else {
            throw new Error("no data found");
          }
        })
        .catch(() => "An error happened");
    },
  });
  const mutateFn = useMutation({
    async mutationFn(info: string) {
      try {
        const isReachedServer = await new Promise((resolve, reject) => {
          console.log("fetching");
          setTimeout(() => {
            resolve(true);
          }, 200);
        });
        if (!isReachedServer) throw new Error("Server issue");
        isReachedServer && data.push(info);
      } catch {
        return "Server issue";
      }
    },
    onSuccess() {
      queryClient.invalidateQueries(["getD1"]);
    },
  });

  return (
    <div>
      <NavBar></NavBar>
      <h1 className={cls.sectionHeading}> #Trending </h1>
      {getQuery.isLoading && <div> Loading</div>}
      {getQuery.isError && <div> Error</div>}
      {getQuery.isSuccess && <div>{getQuery.data}</div>}
      <button
        disabled={mutateFn.isLoading}
        onClick={() => mutateFn.mutate("data 3")}
      >
        Submit
      </button>
    </div>
  );
}
