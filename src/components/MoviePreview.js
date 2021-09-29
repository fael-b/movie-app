export default function MoviePreview({ movie, select }) {
  function handleClick() {
    select(movie.id)
  }
  return (
    <li onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="movie poster"
      />
      <h2>{movie.title}</h2>
      <span>{`(${movie.release_date.slice(0, 3)})`}</span>
      <strong>⭐{movie.vote_average}</strong>
    </li>
  )
}
