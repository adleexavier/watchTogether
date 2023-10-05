import React from "react";
import { useQuery } from "@tanstack/react-query";
import { data } from "./Home";
export default function Post2() {
  const getQuery = useQuery({
    queryKey: ["gets"],
    queryFn: (object) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      })
        .then((status) => {
          if (status) return ` data2 ${[...data]} `;
          else throw new Error("Error happened");
        })
        .catch((err) => "error happened"),
  });

  return (
    <div>
      Post2
      {getQuery.isSuccess && getQuery.data}
    </div>
  );
}
