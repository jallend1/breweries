import React from "react";
import { useParams } from "react-router-dom";

const Brewery = (props) => {
  const id = useParams();
  console.log(id);
  return <p>brewery page</p>;
};

export default Brewery;
