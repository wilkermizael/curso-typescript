import { Request, Response } from "express-serve-static-core";
import { Game } from "../protocols/game-protocol";
import gamesService from "../service/games-service";

export async function postGames(req: Request, res:Response){
     const body = req.body as Game;
     try {
       await gamesService.createGame(body);
       res.sendStatus(200);
     } catch (error) {
       console.log(error);
       res.sendStatus(500);
     }
}

export async function getGames(req: Request, res: Response) {
    try {
      const games = await gamesService.getGames();
      res.send(games);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
   
}