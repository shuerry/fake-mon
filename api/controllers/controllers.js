import path from "path";
import ArticlesAccessor from "../db_accessor/articles.accessors.js";
import PokemonsAccessor from "../db_accessor/pokemons.accessors.js";

class PageController {
    static getHomePage(req, res) {
        res.sendFile(path.resolve() + "/public/html/index.html");
    }

    static async getArticles(req, res) {
        const articles = await ArticlesAccessor.getAllArticles();
        res.render("articles", {articles});
        //res.sendFile(path.resolve() + "/public/html/articles.html");
    }

    static async getPokemons(req, res) {
        const pokemons = await PokemonsAccessor.getAllPokemons();
        res.render("pokemons", {pokemons});
        //res.sendFile(path.resolve() + "/public/html/articles.html");
    }

    static getProfile(req, res) {
        res.sendFile(path.resolve() + "/public/html/profile.html");
    }

    static async postArticle(req, res) {
        const articleToPost = {
            title : req.body.title,
            author : req.body.author,
            text : req.body.text,
            date : req.body.date,
        };
        res.json(req.body);
    }

    static async postPokemon(req, res) {
        const pokemonToPost = {
            name : req.body.name,
            type : req.body.type,
            owner : req.body.owner,
            description : req.body.description,
        };
        res.json(req.body);
    }
}

export default PageController;