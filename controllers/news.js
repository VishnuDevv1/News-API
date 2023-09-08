import express from "express";
const app = express();

import axios from "axios";
const APILINK = "https://newsapi.org/v2/everything";

let num = 0;


const getNews = async(req, res)=>
{    
    const queryOptions = {
        q: req.query.q,
      from: '2023-09-02',
      sortBy: 'popularity',
      apiKey: '85940a4d7b23488ba7ecd9e9e7c6533e',
    }
    console.log(queryOptions);
    const news = await axios.get(APILINK, {params: queryOptions});

    const results = [];

    news.data["articles"].forEach(element => {
        
        
        results.push({"title":element["title"], 
        "url": element["url"], 
        "img":element["urlToImage"],
        "desc":element["description"],
        "content":element["content"]});
    });
    res.json(results);
}



export default getNews;