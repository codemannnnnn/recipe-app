import React, { useEffect, useState } from "react";
import axios from "axios";
import Rec from "./Rec.js";

const Recipe = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:9000/api/recipe").then((res) => {
      console.log(res);
      // const data = res.data;
      setData(res.data);
    });
  }, []);
  // console.log({ data });
  return (
    <div>
      <h1>This is from the recipe component</h1>

      <Rec data={data} />
    </div>
  );
};

export default Recipe;
