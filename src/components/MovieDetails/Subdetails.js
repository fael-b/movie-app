export default function Subdetails({ releaseDate, language, runtime }) {
  return (
    <h3 className="movie-subdetails">
      π
      {releaseDate ? " " + releaseDate + "  " : " Unknown release date  "}β πΊοΈ
      {language ? " " + language.toUpperCase() + "  " : " Unspecified origin  "}
      β β{runtime ? " " + runtime + " min  " : " Unknown runtime  "}
    </h3>
  )
}
