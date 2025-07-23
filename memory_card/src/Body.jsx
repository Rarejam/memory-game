import { useEffect, useState } from "react";

const Body = ({ incrementScore }) => {
  const [jsonData, setJsonData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = "eV7TRI8rZC7ExzSjHIOENVkhPT4danWT";
        const response =
          await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=anime&limit=12&rating=pg
`);
        const jsonRespone = await response.json();
        // shuffleCards(setJsonData(data));
        const shuffled = shuffleCards(jsonRespone.data);
        setJsonData({ data: shuffled });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  function shuffleCards(jsonRespone) {
    return jsonRespone.sort(() => Math.random() - 0.5);
  }

  function buttonClick() {
    const shuffled = shuffleCards(jsonData.data);
    setJsonData({ data: shuffled });
  }

  return (
    <div className="body-content">
      <div
        style={{
          display: "flex",
          justifyContent: "content",
          alignItems: "center",
          marginLeft: " 20px",
          color: "blue",
        }}
      >
        Get points by clicking on an image but don't click on the same image
        more than once
      </div>
      <div className="body-container">
        {jsonData.data.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              //   fontFamily: "bold",
              fontFamily: "cursive",
            }}
          >
            Loading...
          </div>
        ) : (
          jsonData.data.map((anime) => (
            <div
              className="body-div"
              key={anime.id}
              onClick={() => {
                buttonClick();
                incrementScore(anime.id);
              }}
            >
              <div className="image-div">
                <img src={anime.images.downsized_still.url} alt={anime.title} />
              </div>
              <div className="div-name">{anime.title}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
