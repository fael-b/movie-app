export default function Subdetails({ releaseDate, language, runtime }) {
  return (
    <h3 className="movie-subdetails">
      📅
      {releaseDate ? " " + releaseDate + "  " : " Unknown release date  "}● 🗺️
      {language ? " " + language.toUpperCase() + "  " : " Unspecified origin  "}
      ● ⌛{runtime ? " " + runtime + " min  " : " Unknown runtime  "}
    </h3>
  )
}
