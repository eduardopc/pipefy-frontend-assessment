import React from "react";
import { gql, useQuery } from "@apollo/client";

export const Home = () => {
  const { data, loading, error } = useQuery(gql`
    query me {
      me {
        email
      }
    }
  `);

  return (
    <>
      <h1>{loading && <p>Loading...</p>}</h1>
      <h1>{JSON.stringify(data, null, 2)}</h1>
    </>
  );
};
