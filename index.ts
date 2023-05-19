import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app: Express = express();
const port = process.env.PORT;

app.get("/", async (req: Request, res: Response) => {
    const completion = await openai.createEmbedding({
        model: "text-embedding-ada-002",
        input: "Hello, my name is",
    });

    res.send(completion.data);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
