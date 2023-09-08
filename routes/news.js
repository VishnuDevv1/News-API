import express from "express";
import getNews from "../controllers/news.js"
const router = express.Router();

const APILINK = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=85940a4d7b23488ba7ecd9e9e7c6533e"

router.route('/').get(getNews);



export default router;