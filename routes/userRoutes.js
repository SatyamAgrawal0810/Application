import express from "express"
import { fetch, create, update, deleted, single, findByCategory} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/getAll", fetch);
route.put("/update/:id",update);
route.delete("/delete/:id", deleted);
route.get("/single/:id",single);
route.get("/category/:category", findByCategory);

export default route;
