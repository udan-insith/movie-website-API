import "./App.css";
import MovieCard from "./components/MovieCard.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const movieNumber = 1;

  return (
    <>
      <Home />
      {/* {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Tim's Film", release_date: "2024" }} />
      ) : (
        <MovieCard movie={{ title: "Joe's Film", release_date: "2025" }} />
      )} */}
    </>
  );
}

export default App;
