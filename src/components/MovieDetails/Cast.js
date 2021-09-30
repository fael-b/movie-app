import React from "react"
import Actor from "./Actor"

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
    <>
      <h3 className="sub-title">Cast</h3>
      <ul className="cast">
        {castList ? (
          castList.map((actor) => <Actor key={actor.id} actor={actor} />)
        ) : (
          <Actor />
        )}
      </ul>
    </>
  )
}
