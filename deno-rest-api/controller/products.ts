import { Product } from "../types.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
let products: Product[] = [{
  id: "1",
  name: "Product One",
  description: "This is product one",
  price: 29.99,
}, {
  id: "2",
  name: "Product Two",
  description: "This is product two",
  price: 39.99,
}, {
  id: "3",
  name: "Product Three",
  description: "This is product three",
  price: 59.99,
}];

// @desc         GET ALL PRODUCTS
//@ route  GET /api/v1/products
export const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

// @desc         GET single PRODUCT
//@ route  GET /api/v1/products/:id
export const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      message: "No Product Found",
    };
  }
};

// @desc         ADD PRODUCT single PRODUCT
//@ route  POST /api/v1/products/
export const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "Umm No data",
    };
  } else {
    const product: Product = body.value;
    product.id = v4.generate();
    products.push(product);
    response.status = 201;
    response.body = {
      success: true,
      data: product,
    };
  }
};

// @desc         UPDATE PRODUCT single PRODUCT
//@ route  PUT /api/v1/products/:id
export const updateProduct = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: "update",
  };
};

// @desc         DELETE PRODUCT single PRODUCT
//@ route  DELETE /api/v1/products/:id
export const deleteProduct = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: "delete",
  };
};
