import { Suspense } from 'react'
import './App.css'
import Movie from './components/Movie'

export default function App() {
  
  return (
    <Suspense fallback={<h1>Loading...</h1>} name='singleMovieSuspense'>
      <Movie id={1} />
    </Suspense>
  )
}