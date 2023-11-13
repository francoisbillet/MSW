import React, { useEffect, useState } from "react";
import { fetchUsers } from "../Dummy/Dummy";

export const Component2 = () => {
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
