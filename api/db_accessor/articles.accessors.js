import Article from "../models/article.js";
import mongoose from "mongoose";
import Connection from "../db/connection.js";

export default class ArticlesAccessor {
    static async getArticleByName(articleTitle) {
        await Connection.open("articles");
        const articleIGotFromTheDB = await Article.findOne({title: articleTitle});
        return articleIGotFromTheDB;
    }

    static async getAllArticles() {
        await Connection.open("articles");
        const allArticles = await Article.find();
        return allArticles;
    }

    static async postArticle(articleDoc) {
        Article.create(articleDoc);
    }
}