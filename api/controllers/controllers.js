import path from "path";

class PageController {
    static getHomePage(req, res) {
        res.sendFile(path.resolve() + "/index.html");
    }

    static getArticles(req, res) {
        res.sendFile(path.resolve() + "/articles.html");
    }

    static getProfile(req, res) {
        res.sendFile(path.resolve() + "/profile.html");
    }
}

export default PageController;