import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Actor from "../../components/MovieDetails/Actor"

const mockActor = {
  id: 109,
  name: "Elijah Wood",
  profile_path: "7UKRbJBNG7mxBl2QQc5XsAh6F8B.jpg",
  character: "Frodo Baggins",
}

describe("Renders the default component", () => {
  it("Displays list item", () => {
    render(<Actor />)
    expect(screen.getByRole("listitem")).toBeDefined()
  })

  it("Displays default actor name", () => {
    render(<Actor />)
    expect(screen.getByText("Unnamed Actor")).toBeInTheDocument()
  })

  it("Displays default profile picture", () => {
    render(<Actor />)
    const profilePicture = screen.getByRole("img")
    expect(profilePicture.src).toBe("http://localhost/default_movie.png")
    expect(profilePicture).toBeVisible()
  })
})

describe("Renders usual component", () => {
  it("Displays list item", () => {
    render(<Actor key={mockActor.id} actor={mockActor} />)
    expect(screen.getByRole("listitem")).toBeDefined()
  })

  it("Displays prop actor name", () => {
    render(<Actor key={mockActor.id} actor={mockActor} />)
    expect(screen.getByText(mockActor.name)).toBeInTheDocument()
  })

  it("Displays prop profile picture", () => {
    render(<Actor key={mockActor.id} actor={mockActor} />)
    const profilePicture = screen.getByRole("img")
    expect(profilePicture.src).toBe("http://localhost/default_movie.png")
    expect(profilePicture).toBeVisible()
  })
})
