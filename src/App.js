import "./css/App.css"
import React from "react"
import Sidebar from "./components/Sidebar"
import MovieDetails from "./components/MovieDetails"

function App() {
  const [selectedMovie, setSelectedMovie] = React.useState()
  return (
    <div className="App">
      <Sidebar select={setSelectedMovie} />
      <MovieDetails movieId={selectedMovie} />
    </div>
  )
}

export default App
