import React, { memo, useEffect, useState } from "react";
import axios from 'axios';
import {
  DialogDetail,
  DialogGrid,
  DialogLabel,
} from "@/components/Dialog/DialogGrid";
import { GameWrapper } from "../../styles/games/gameStyle";
import styled from "styled-components";
import Popup from "@/components/Popup/Popup";

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 525px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px; 
  position: relative; 
  left: 25px; 
  top: 80px;
`;

const Games = ({ games: initGames }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGames, setFilteredGames] = useState(initGames); 
  const [openPopup, setOpenPopup] = useState()
  const [games, setGames] = useState(initGames) 

  const fetchGames = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/api/games`);
      setGames(data.games);
      setFilteredGames(data.games); 
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = games.filter(game => game.name.toLowerCase().includes(value));
    setFilteredGames(filtered);
  };

  useEffect(() => {
    if (!openPopup) {
      fetchGames();
    }
  }, [openPopup]);

  return (
    <>
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} />
        <SearchInput
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={handleSearch}
            />
        <GameWrapper>
            <DialogGrid>
                {filteredGames.map((game, index) => (
                    <DialogDetail $img={game.image} key={index} onClick={() => setOpenPopup(game)}>
                        <DialogLabel>{game.name}</DialogLabel>
                    </DialogDetail>
                ))}
            </DialogGrid>
        </GameWrapper>
    </>
  );
};

Games.getInitialProps = async (context, client) => {
  const { data } = await axios.get(`http://localhost:3000/api/games`);

  return { games: data.games };
};

Games.displayName = "Games";

export default Games;