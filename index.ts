import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("๐๐๐๐Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`โก๏ธ[server]: Server is running at http://localhost:${port}/`);
});
