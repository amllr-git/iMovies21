import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <MovieCard movie={{title: "Fantastic Four", release_date: "2025"}}/>
      <MovieCard movie={{title: "Superman", release_date: "2025"}}/>
    </>
  );
}



export default App;
