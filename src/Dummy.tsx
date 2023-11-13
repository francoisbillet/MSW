import { useEffect, useState } from "react";

const fetchUsers = async () => {
  const response = await fetch("https://dummyjson.com/products/1");
  if (!response.ok) {
    console.log("NOP");
    throw Error("there was an error");
  }
  return response.json();
};

export const Dummy = () => {
  const [product, setProduct] = useState<any>();

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        console.log("in then");
        setProduct(data);
      })
      .catch(() => console.log("error"));
  }, []);

  console.log("product : ", product);

  return product ? <div>{product?.title}</div> : <div>Loading or error</div>;
};
