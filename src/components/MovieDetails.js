import React from "react"

export default function MovieDetails({ movieId }) {
  const [movieInfo, setMovieInfo] = React.useState()
  React.useEffect(() => {
    if (movieId) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=49abe0e8aeaa4e8f9ff7476817dee548`
      )
        .then((res) => res.json())
        .then((movie) => setMovieInfo(movie))
    }
  }, [movieId])

  return <div>{movieInfo ? movieInfo.title : "Please select a movie."}</div>
}
