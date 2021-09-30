export default function MovieRating({ rating }) {
  return (
    <h2 className="movie-rating">⭐{rating ? rating : " No rating yet"}</h2>
  )
}
