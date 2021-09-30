export default function Overview({ overview }) {
  return (
    <>
      <h3 className="sub-title">Overview</h3>
      <p className="movie-overview">
        {overview ? overview : "No overview available."}
      </p>
    </>
  )
}
