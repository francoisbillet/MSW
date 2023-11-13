import { useEffect, useState } from "react";

export const fetchUsers = async () => {
  const response = await fetch("https://dummyjson.com/products/1");
  if (!response.ok) {
    throw Error("there was an error");
  }
  return response.json();
};

export const Dummy = () => {
  const [product, setProduct] = useState<any>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setProduct(data);
      })
      .catch(() => setError(true));
  }, []);

  return !error ? <div>{product?.title}</div> : <div>error</div>;
};
