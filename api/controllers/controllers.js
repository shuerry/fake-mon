import path from "path";

class PageController {
    static getHomePage(req, res) {
        res.sendFile(path.resolve() + "/public/html/index.html");
    }

    static getArticles(req, res) {
        res.sendFile(path.resolve() + "/public/html/articles.html");
    }

    static getProfile(req, res) {
        res.sendFile(path.resolve() + "/public/html/profile.html");
    }
}

export default PageController;