import { Card } from "@mui/material"

export default function Actor({ actor }) {
  return (
    <li className="actor-container">
      <Card sx={{ height: "100%" }}>
        <img
          className="actor-picture"
          src={
            actor?.profile_path
              ? "https://image.tmdb.org/t/p/original/" + actor.profile_path
              : "/default_movie.png"
          }
          alt=""
        />
        <p className="actor-name">
          {actor?.name ? actor.name : "Unnamed Actor"}
        </p>
      </Card>
    </li>
  )
}
