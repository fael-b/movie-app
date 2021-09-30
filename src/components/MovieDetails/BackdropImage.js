export default function BackdropImage({ backdropUrl }) {
  return (
    <div
      style={
        backdropUrl
          ? {
              backgroundImage: `url('https://image.tmdb.org/t/p/original${backdropUrl}')`,
              filter: "",
            }
          : {}
      }
      className="movie-backdrop"
    ></div>
  )
}
