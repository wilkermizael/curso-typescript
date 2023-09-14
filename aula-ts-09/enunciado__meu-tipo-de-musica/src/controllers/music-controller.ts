import { Request, Response } from "express";
import musicService from "../services/music-service";
import { Music } from "protocols";
import { musicSchema } from "../schemas/musicSchema";

function getMusics(req: Request, res: Response) {
  const musics = musicService.getMusics();
  res.send(musics);
}

function createMusic(req: Request, res: Response) {
  const music = req.body as Music; // TODO Asserção do tipo
  const {error, value} = musicSchema.validate(music)
  if(error) return res.status(400).send( "Esses dados não são válidos")
  musicService.createMusic(value);
  res.sendStatus(201);
}

const musicController = {
  getMusics,
  createMusic
}

export default musicController;