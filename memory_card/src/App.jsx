import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClicedIds] = useState([]);

  function incrementScore(id) {
    if (clickedIds.includes(id)) {
      setScore(0);
      setClicedIds([]);
    } else {
      setClicedIds((prevIds) => [...prevIds, id]);
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
    }
  }

  return (
    <div className="app-container">
      <Header score={score} bestScore={bestScore} />
      <Body incrementScore={incrementScore} />
      <Footer />
    </div>
  );
};
export default App;
