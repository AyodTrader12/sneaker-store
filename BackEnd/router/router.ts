import { Router } from "express";
import { createSneaker, searchSneaker } from "../controller/productController";

const router: any = Router();

router.route("/create-sneaker").post(createSneaker);
router.route("/search-sneaker").get(searchSneaker);
