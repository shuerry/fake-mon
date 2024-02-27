import express from "express";
import PageController from "../controllers/controllers.js";
import path from "path";

const router = express.Router();

router.route("/").get(PageController.getHomePage);

router.route("/articles").get(PageController.getArticles).post(PageController.postArticle);

router.route("/pokemons").get(PageController.getPokemons).post(PageController.postPokemon);

router.route("/profile").get(PageController.getProfile);

router.route("/public/css/:style.css").get((req, res) => {
    res.sendFile(path.resolve() + `/public/css/${req.params.style}.css`);
});

export default router;