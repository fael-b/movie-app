import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Poster from "../../components/MovieDetails/Poster"

it("Renders propless Poster component", () => {
  render(<Poster />)
  expect(screen.getByRole("img")).toBeVisible()
})
