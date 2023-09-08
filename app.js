import express from "express";
import router from "./routes/news.js";
const app = express();
import cors from "cors";
app.use(cors());

app.use(express.json());
app.use(router);

const port = 8080;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})