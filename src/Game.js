import React, { useState } from 'react';

const game = ['cricket', 'football', 'hockey'];
const day = ['weekday', 'weekend'];

function Game() {
  const [games, setGame] = useState();
  const [days, setDay] = useState();
  return (
    <>
      <h3> Chosse Game</h3>
      {game?.map((play) => {
        return (
          <>
            <input
              type='radio'
              id='{play}'
              value={play}
              name='game'
              onClick={(e) => setGame(e.target.value)}
            />
            <label for='play'>{play}</label>
            <br />
          </>
        );
      })}

      <h3>Choose Day</h3>
      {day?.map((days) => {
        return (
          <>
            <input
              type='radio'
              id='{day}'
              value={days}
              name='day'
              onClick={(e) => setDay(e.target.value)}
            />
            <label for='day'>{days}</label>
            <br />
          </>
        );
      })}

      <p>
        {games} on {days}
      </p>
    </>
  );
}

export default Game;
