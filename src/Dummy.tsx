import { useEffect, useState } from "react";

export const Dummy = () => {
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => {
        console.log("res : ", res);
        return res.json();
      })
      .then((json) => {
        console.log("json : ", json);
        setProduct(json);
      });
  }, []);

  console.log(product);

  return <div>{product?.title}</div>;
};
