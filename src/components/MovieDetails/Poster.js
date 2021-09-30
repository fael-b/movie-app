export default function Poster({ posterUrl }) {
  return (
    <img
      className="movie-poster"
      src={
        posterUrl
          ? `https://image.tmdb.org/t/p/original/${posterUrl}`
          : "/default_movie.png"
      }
      alt="movie poster"
    />
  )
}
