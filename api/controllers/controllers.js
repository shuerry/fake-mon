import path from "path";
import ArticlesAccessor from "../db_accessor/articles.accessors.js";

class PageController {
    static getHomePage(req, res) {
        res.sendFile(path.resolve() + "/public/html/index.html");
    }

    static async getArticles(req, res) {
        const articles = await ArticlesAccessor.getAllArticles();
        res.render("articles", {articles});
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
}

export default PageController;