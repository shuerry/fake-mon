import path from "path";

class PageController {
    static getHomePage(req, res) {
        res.sendFile(path.resolve() + "/public/html/index.html");
    }

    static getArticles(req, res) {
        const article1 = {
            title: "Random Article",
            author: "Beepoop",
            text: "This is a random article",
            date: "Febuary 13th, 2034",
        };

        const article2 = {
            title: "Gahhh",
            author: "Moots",
            text: "This is a random grumble page",
            date: "Febuary 13th, 2024",
        };

        const articles = [article1, article2];


        res.render("articles", {articles});
        //res.sendFile(path.resolve() + "/public/html/articles.html");
    }

    static getProfile(req, res) {
        res.sendFile(path.resolve() + "/public/html/profile.html");
    }
}

export default PageController;