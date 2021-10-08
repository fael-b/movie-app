import React from "react"
import { render, waitFor, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Poster from "../components/MovieDetails/Poster"

it("Tests if testing works", () => {
  expect(2 + 2).toBe(4)
})

it("Renders Poster component", () => {
  render(<Poster />)
  expect(screen.getByRole("img")).toBeVisible()
})
