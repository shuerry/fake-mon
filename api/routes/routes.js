import express from "express";
import path from "path";

const router = express.Router();

router.route("/").get((req, res) => {
  res.sendFile(path.resolve() + "/index.html");
});

export default router;