import "./css/App.css"
import React from "react"
import Sidebar from "./components/Sidebar"
import MovieDetails from "./components/MovieDetails"

function App() {
  const selectedState = React.useState()
  return (
    <div className="App">
      <Sidebar selectedState={selectedState} />
      <MovieDetails movieId={selectedState[0]} />
    </div>
  )
}

export default App
