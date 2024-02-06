import express from "express";
import PageController from "../controllers/controllers.js"

const router = express.Router();

router.route("/").get(PageController.getHomePage);

router.route("/articles").get(PageController.getArticles);

router.route("/profile").get(PageController.getProfile);

export default router;