import React, { memo } from "react";
import {
  DialogDetail,
  DialogGrid,
  DialogLabel,
} from "@/components/Dialog/DialogGrid";
import { mapGameData } from "@/utils/mapData";
import { GameWrapper } from "../../styles/games/gameStyle";

const GameItem = memo(({ game }) => (
  <div>
    <h1>{game.title}</h1>
    <DialogGrid>
      {game.items.map((item, index) => (
        <DialogDetail $img={item.image.original.src} key={index} onClick={() => {}}>
          <DialogLabel>{item.gameText}</DialogLabel>
        </DialogDetail>
      ))}
    </DialogGrid>
  </div>
));

GameItem.displayName = "GameItem";

const ShowGamesWithPath = ({ games }) => (
  <GameWrapper>
    {games.map((game, index) => (
      <GameItem key={index} game={game} />
    ))}
  </GameWrapper>
);

const GameWithoutPath = memo(({ games }) => (
  <GameWrapper>
    <DialogGrid>
      {games.map((game, index) => (
        <DialogDetail $img={game.image} key={index} onClick={() => {}}>
          <DialogLabel>{game.text}</DialogLabel>
        </DialogDetail>
      ))}
    </DialogGrid>
  </GameWrapper>
));

GameWithoutPath.displayName = "GameWithoutPath";

const Games = ({ games, path }) => {
  return path ? <ShowGamesWithPath games={games} /> : <GameWithoutPath games={games} />;
};

Games.getInitialProps = async (context, client) => {
  const { path } = context.query;
  const baseUrl = "/kansino/pages/nl";

  const url = path ? `${baseUrl}${path}` : `${baseUrl}/casino/alle-games`;
  const { data } = await client.get(url);

  const gameList = data.components.find((res) => res.type === "game-list");
  const gameCarousel = data.components.filter((res) => res.type === "game-carousel");

  if (!path || !gameCarousel.length) {
    return {
      games: gameList ? gameList.games.map(mapGameData) : [],
      path: null,
    };
  }

  return { games: gameCarousel, path };
};

Games.displayName = "Games";

export default Games;