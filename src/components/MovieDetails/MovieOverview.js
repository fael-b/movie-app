export default function MovieOverview({ overview }) {
  return (
    <>
      <h3 className="movie-overview-title">Overview</h3>
      <p className="movie-overview">
        {overview ? overview : "No overview available."}
      </p>
    </>
  )
}
