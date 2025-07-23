const Header = ({ score, bestScore }) => {
  return (
    <div>
      <div className="head-container">
        <div>Memory Game</div>
        <div className="score-sheet">
          <div>Player Score: {score}</div>
          <div>Best Score : {bestScore}</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
