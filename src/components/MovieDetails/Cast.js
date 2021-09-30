import React from "react"

export default function MovieCast({ movieId }) {
  const [castList, setCastList] = React.useState([])
  React.useEffect(() => {
    if (movieId) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=49abe0e8aeaa4e8f9ff7476817dee548`
      )
        .then((res) => res.json())
        .then((res) => setCastList(res.cast))
    }
  }, [movieId])

  return (
    <div>
      {castList ? (
        castList.map((actor) => <h1>{actor.name}</h1>)
      ) : (
        <h1>Unknown cast</h1>
      )}
    </div>
  )
}
