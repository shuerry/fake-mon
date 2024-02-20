import path from "path";
import PokemonAccessor from "../models/pokemon.js";
class PageController {
    static getHomePage(req, res) {
        res.sendFile(path.resolve() + "/public/html/index.html");
    }

    static async getArticles(req, res) {
        const pokemon = await PokemonAccessor.getAllPokemon();

        res.render("articles", {pokemon});
        //res.sendFile(path.resolve() + "/public/html/articles.html");
    }

    static getProfile(req, res) {
        res.sendFile(path.resolve() + "/public/html/profile.html");
    }
}

export default PageController;