import { use } from "react"

// Server Component
export default function Movie({ id }: { id: number }) {
  // Fetch movie data using the `use()` hook
  const movie = use(fetchMovie(id))
  console.info(typeof movie);

  // Render the movie data
  return <p className="text-bold">{movie?.title || "No Title Available"}</p>
}

// Async function to fetch movie data
async function fetchMovie(id: number) {
  try {
    const response = await fetch(`https://www.freetestapi.com/api/v1/movies/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
    }})
    
    if (!response.ok) {
      throw new Error("Failed to fetch movie")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching movie:", error)
    throw error
  }
}
