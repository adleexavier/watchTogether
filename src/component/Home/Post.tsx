import React from "react";
import { useQuery } from "@tanstack/react-query";
import { data } from "./Home";

export default function Post() {
  const getQuery = useQuery({
    queryKey: ["gets"],
    queryFn: (object) =>
      new Promise((resolve, reject) => {
        resolve(true);
      })
        .then((status) => {
          if (status) return ` data1 ${[...data]} `;
          else throw new Error("Error happened");
        })
        .catch((err) => "error happened"),
  });

  return (
    <div>
      Post
      {getQuery.isSuccess && getQuery.data}
    </div>
  );
}
