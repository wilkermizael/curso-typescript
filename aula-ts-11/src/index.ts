import express, { json } from "express";
import gamesRouter from "./routers/gamesRoutes";

const app = express();

app.use(json());
app.use(gamesRouter)

app.listen(5000, () => {
  console.log(`Server is up and running on port 5000`);
});
