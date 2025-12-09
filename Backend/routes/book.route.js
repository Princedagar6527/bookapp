import express from "express";
import { getBooks} from "../controllers/book.Controller.js";

const router = express.Router();

router.get("/", getBooks);
export default router;