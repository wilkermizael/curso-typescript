
import { getGames, postGames } from "../controller/gamesController";
import { Router } from "express";

const gamesRouter = Router()

gamesRouter.post('/games', postGames)
gamesRouter.get('/games',getGames)

export default gamesRouter