import express from "express";
import PageController from "../controllers/controllers.js"

const router = express.Router();

router.route("/").get(PageController.getHomePage);

export default router;