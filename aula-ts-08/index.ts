type Game = {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: string | Date;
}
const game={
  id: 1,
  platform: {
    id: 1,
    name: "Playstation",
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: new Date("2013-06-14"), // pode ser um Date. também pode ser vazio
};

//const games:Game [] = [game];

function play(game:Game):void {
  // runs the game
  return console.log(game);
}
play(game);