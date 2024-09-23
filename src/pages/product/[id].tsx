import React from "react";
import { useRouter } from "next/router";

const detailProduct = () => {
  const {query} = useRouter();
  return (
    <>
      <div>Detail Product</div>
      <div>Nama: {query.id} </div>
    </>
  );
};

export default detailProduct;
