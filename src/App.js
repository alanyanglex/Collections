import './App.css';

function App() {
  const Movies = [
    {
      "name": "Kung Fu Panda",
      "image": "image link"
    },
    {
      "name": "Passengers",
      "image": "image link"
    },
    {
      "name": "Barbie",
      "image": "image link"
    },
    {
      "name": "Five Nights at Freddy",
      "image": "image link"
    },
    {
      "name": "The Incredibles",
      "image": "image link"
    },
    {
      "name": "Into the Spiderverse",
      "image": "image link"
    },
    {
      "name": "Oppenheimer",
      "image": "image link"
    },
    {
      "name": "Moonlight",
      "image": "image link"
    }
  ]
  return (
    <div className="App">
      <div className="header">
        <h1>Movies to Watch!</h1>
      </div>
      <div className="body">
        {Movies.map(movie =>
        <div className="movie">
          <h3 className="movie-header">{movie.name}</h3>
        </div>)
        }
      </div>
    </div>
  );
}

export default App;



