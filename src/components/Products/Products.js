import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const data = useLoaderData();
  return (
    <>
      <h1>Products Page {data.product_Id}</h1>
      <p>{data.product_name}</p>
    </>
  );
};

export default Products;

export async function loader({ request, params }) {
  const id = params.product_Id;

  return { product_Id: id, product_name: "My Product" };
}
