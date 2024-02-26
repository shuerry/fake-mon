import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, unique: true, required: true },
  author: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true },
}, {
  collection: 'articles'
});

const db = mongoose.connection.useDb("articles");
const Article = db.model("Article", ArticleSchema);

export default Article;