import { ListItem, ListItemButton } from "@mui/material"
import { Divider } from "@mui/material"
import "../css/MoviePreview.css"

export default function MoviePreview({ movie, selectedState }) {
  const [selectedMovie, setSelectedMovie] = selectedState
  function handleClick() {
    setSelectedMovie(movie.id)
  }
  return (
    <>
      <ListItem sx={{ height: "140px" }}>
        <ListItemButton
          onClick={handleClick}
          selected={selectedMovie === movie.id}
          sx={{ borderRadius: "15px" }}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : "/default_movie.png"
            }
            alt="movie poster"
          />

          <h3>
            {movie.title}
            <span>
              {movie.release_date
                ? ` (${movie.release_date.slice(0, 4)})`
                : " (Unspecified)"}
            </span>
          </h3>

          <strong>⭐{movie.vote_average ? movie.vote_average : "?"}</strong>
        </ListItemButton>
      </ListItem>
      <Divider
        variant="middle"
        sx={{ maxWidth: "90%", marginLeft: "5%", marginRight: "5%" }}
      />
    </>
  )
}
