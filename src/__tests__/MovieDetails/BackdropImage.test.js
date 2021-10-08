import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import BackdropImage from "../../components/MovieDetails/BackdropImage"

const mockUrl = "/blEF6I5n7X0GXMfv8fFl1o0Tz3z.jpg"

it("Renders the default component", () => {
  render(<BackdropImage />)
})
