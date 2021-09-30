import { List, Chip } from "@mui/material"

export default function MovieGenres({ genres }) {
  return (
    <List>
      {genres ? (
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            sx={{ marginLeft: "5px", marginBottom: "5px" }}
          />
        ))
      ) : (
        <Chip label="Unknown genre" />
      )}
    </List>
  )
}
