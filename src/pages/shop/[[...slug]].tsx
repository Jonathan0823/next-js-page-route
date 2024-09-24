import React from "react";
import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <>
      <div>ShopPage</div>
      <div>Nama: {`${query.slug && query.slug[0] +" "+ query.slug[1]}` } </div>
    </>
  );
};

export default ShopPage;
