import Tile from "./Tile";

export default function Board() {
  function handleClicked(value) {
    return (value = "X");
  }

  return (
    <div className="game-board">
      <div>
        <Tile value="1" onClick={() => handleClicked({ value })} />
        <Tile value="2" onClick={() => handleClicked({ value })} />
        <Tile value="3" onClick={() => handleClicked({ value })} />
      </div>
      <div>
        <Tile value="4" onClick={() => handleClicked({ value })} />
        <Tile value="5" onClick={() => handleClicked({ value })} />
        <Tile value="6" onClick={() => handleClicked({ value })} />
      </div>
      <div>
        <Tile value="7" onClick={() => handleClicked({ value })} />
        <Tile value="8" onClick={() => handleClicked({ value })} />
        <Tile value="9" onClick={() => handleClicked({ value })} />
      </div>
    </div>
  );
}
