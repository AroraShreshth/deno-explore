import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./controller/products.ts";

const router = new Router();

router.get("/api/v1/products", getProducts) // Generic List View
  .get("/api/v1/products/:id", getProduct) // Single Object Fetching
  .post("/api/v1/products", addProduct) // Adding a single Object
  .put("/api/v1/products/:id", updateProduct) // Updating a Single Object
  .delete("/api/v1/products/:id", deleteProduct); // Deleting a Single Object

export default router;
