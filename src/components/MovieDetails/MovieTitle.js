export default function MovieTitle({ title, releaseDate }) {
  return (
    <h1 className="movie-title">
      {title ? title : "Unknown name"}
      {releaseDate ? (
        <span className="movie-release-date">
          {` (${releaseDate.slice(0, 4)})`}
        </span>
      ) : (
        ""
      )}
    </h1>
  )
}
