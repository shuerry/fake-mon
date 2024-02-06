import path from "path";

class PageController {
    static getHomePage(req, res) {
        res.sendFile(path.resolve() + "/index.html");
    }
}

export default PageController;